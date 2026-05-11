import example from "./example.json" with { type: "json" };
import { writeFileSync, rmSync, readdirSync } from "fs";

import { parseContainer } from "./modules/parseContainer.mjs";
import { hoistedEnums, parseEnum } from "./modules/parseEnum.mjs";


for (const filePath of readdirSync("./typings/output"))
	rmSync("./typings/output/" + filePath);


// switch cannot be a type, and void is already a ts type
const ignoredTypes = new Set(["switch", "void"]);
// No types in ignoredTypes should be present in someTypes
const baseTypes = {
	varint: "number",
	varlong: "bigint",
	optvarint: "number | null",
	pstring: "string",
	buffer: "Buffer",
	u8: "number",
	u16: "number",
	u32: "number",
	u64: "bigint",
	i8: "number",
	i16: "number",
	i32: "number",
	i64: "bigint",
	bool: "boolean",
	f32: "number",
	f64: "number",
	UUID: "string",
	option: "unknown",
	entityMetadataLoop: "unknown[]",
	topBitSetTerminatedArray: "unknown[]",
	bitfield: "number",
	bitflags: "number",
	container: "Record<string, unknown>",
	array: "unknown[]",
	restBuffer: "Buffer",
	anonymousNbt: "unknown",
	anonOptionalNbt: "unknown | null",
	registryEntryHolder: "unknown",
	registryEntryHolderSet: "unknown[]",
	lpVec3: "{ x: number; y: number; z: number }"
} as Record<string, string>;



for (const [sectionName, data] of Object.entries(example))
	generateTypes(sectionName, sectionName, data);


/**
 * @param sectionNameHistory The names of the items the function traversed over to reach the current status, used for the file name. eg handshaking_toClient
 */
export function generateTypes(
	sectionNameHistory: string,
	sectionName: string,
	data: typeof example[keyof typeof example],
): string | void {

	if (sectionName !== "types") {
		for (const [subSectionName, subData] of Object.entries(data)) {
			generateTypes(`${sectionNameHistory}_${subSectionName}`, subSectionName, subData);
		}
		return;
	}


	let typesOutput = "";

	function unhandledType(name: string, type: unknown, msg: string) {
		console.error(msg + ". Unhandled type or data structure:", type);
		typesOutput += `// Unhandled type when generating typescript declaration file. This type will default to unknown for type saftey\ntype ${name} = unknown;`;
	}


	for (const [name, type] of Object.entries(data)) {
		if (ignoredTypes.has(name))
			continue;

		if (type === "native") {
			if (name in baseTypes)
				typesOutput += `type ${name} = ${baseTypes[name]};\n`;
			else
				unhandledType(name, type, "Invalid type when type is native");
		}

		else if (Array.isArray(type)) {
			if (type.length !== 2) {
				unhandledType(name, type, "Invalid subarray length");
				continue;
			}

			typesOutput += subArrayHandling(name, type[0], type[1], true);
		}

		// this must come after array check as arrays are object types too
		else if (typeof type === "object") {
			// pass item through this for loop again, extract this for loop to a function
			console.error("unimplemented object");
		}

		// we assume that the type is already defined somewhere else
		// eg type packet_spawn_position = RespawnData; where RespawnData is defined in the program alraedy
		else if (!ignoredTypes.has(type)) {
			typesOutput += `type ${name} = ${type};\n`;
		}
	}

	writeFileSync(`./typings/output/${sectionNameHistory}.d.ts`, typesOutput, "utf8");
}


function unhandledType(name: string, type: unknown, msg: string) {
	console.error(msg + ". Unhandled type or data structure:", type);
	return `// Unhandled type when generating typescript declaration file. This type will default to unknown for type saftey\ntype ${name} = unknown;`;
}

// add jsdoc later
export function subArrayHandling(name: string, subTypeType: string, subTypeData: unknown, calledFromMain: boolean, longNameForEnum: string = name): string {

	// todo, handle other types of type[1]
	if (subTypeType === "container" && Array.isArray(subTypeData)) {
		// parseContainer only returns object, does not declare interface or type
		// parseContainer already returns newlines so no need to add them
		if (calledFromMain)
			return `interface ${name} ${parseContainer(subTypeData, longNameForEnum)}`;
		else
			return `    ${name}: ${parseContainer(subTypeData, longNameForEnum)};`;
	}


	// object can be array too, so check for that
	if (subTypeType === "switch" && !Array.isArray(subTypeData) && typeof subTypeData === "object") {
		const tempSubTypeData = subTypeData as {
			compareTo: string;
			fields: Record<string, unknown>;
			default?: unknown;
		};

		if ("default" in tempSubTypeData && tempSubTypeData.default !== "void")
			console.error("unimplemented default ", tempSubTypeData);


		/**
		 * Is a set so no duplicates
		 * @example These 2 would be duplicated as we dont take compareTo into account (yet)
			"fields": {
				"0": "void",
				"false": "void"
			}
		 */
		const variations = new Set<string>();
		let nestedVariations = "";
		const fields = Object.entries(tempSubTypeData.fields);
		// just adds the default value onto fields so it can be handled together
		fields.push([`${name}_default`, tempSubTypeData.default]);

		for (const [key, value] of fields) {
			if (typeof value === "string") {
				if (value === "void")
					variations.add("undefined");
				else
					variations.add(value);
			}

			// switches can have nested containers in them
			else if (Array.isArray(value) && value[0] === "container")
				nestedVariations += " | \n" + parseContainer(value[1], key).trim();

			else if (tempSubTypeData.default)
				console.error("Unhandled subTypeData: ", tempSubTypeData);
		}

		// order the variations the ones from parseContainer go at the bottom
		return `    ${name}: ${Array.from(variations).join(" | ")} ${nestedVariations};\n`;
	}


	// mapper is a enum
	if (subTypeType === "mapper") {
		// we assume all enums are numerical, for string enum handling might as well use parseContainer if there are string enums
		if (typeof subTypeData !== "object" || !("type" in subTypeData!) || !("mappings" in subTypeData) || typeof subTypeData.mappings !== "object")
			return unhandledType(subTypeType, subTypeData, "Invalid enum type");

		// if not called from main, it means its a nested enum which needs to be refrenced
		// otherwise the enum is just being declared
		if (!calledFromMain)
			return `    ${name}: ${parseEnum(longNameForEnum, subTypeData.mappings!)};\n`;

		parseEnum(longNameForEnum, subTypeData.mappings!);
	}


	if (subTypeType === "option") {
		if (typeof subTypeData !== "string")
			return unhandledType(subTypeType, subTypeData, "subTypeType is option, but subTypeData is not a string");

		return `    ${name}?: ${subTypeData};\n`;
	}


	console.error(`Unimplemented!\n realType: ${subTypeType}\n value: `, subTypeData);
	return "";
}


writeFileSync("./typings/output/hoistedEnums.d.ts", hoistedEnums, "utf8");