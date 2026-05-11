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
export function generateTypes(sectionNameHistory: string, sectionName: string, data: typeof example[keyof typeof example], returnInsteadOfWritingToFile?: false): void;
export function generateTypes(sectionNameHistory: string, sectionName: string, data: typeof example[keyof typeof example], returnInsteadOfWritingToFile: true): string;
export function generateTypes(
	sectionNameHistory: string,
	sectionName: string,
	data: typeof example[keyof typeof example],
	returnInsteadOfWritingToFile?: boolean,
): string | void {

	if (!returnInsteadOfWritingToFile && sectionName !== "types") {
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


	if (returnInsteadOfWritingToFile)
		return typesOutput;

	writeFileSync(`./typings/output/${sectionNameHistory}.d.ts`, typesOutput, "utf8");
}


// add jsdoc later
export function subArrayHandling(name: string, subTypeName: string, subTypeType: unknown, calledFromMain: boolean, longNameForEnum: string = name): string {
	let output = "";

	function unhandledType(name: string, type: unknown, msg: string) {
		console.error(msg + ". Unhandled type or data structure:", type);
		output += `// Unhandled type when generating typescript declaration file. This type will default to unknown for type saftey\ntype ${name} = unknown;`;
	}

	// todo, handle other types of type[1]
	if (subTypeName === "container" && Array.isArray(subTypeType)) {
		// parseContainer only returns object, does not declare interface or type
		if (calledFromMain)
			output += `interface ${name} ${parseContainer(subTypeType, longNameForEnum)}`;
		else
			output += `    ${name}: ${parseContainer(subTypeType, longNameForEnum)};`;
	}

	// object can be array too, so check for that
	else if (subTypeName === "switch" && !Array.isArray(subTypeType) && typeof subTypeType === "object") {
		/*
		Not sure how to interpret this
		{
			"compareTo": "flags",
			"fields": {
				"1": "varint",
				"3": "varint"
			},
			"default": "void"
		}
		*/
	}

	// mapper is a enum
	else if (subTypeName === "mapper") {
		// we assume all enums are numerical, for string enum handling might as well use parseContainer if there are string enums
		if (typeof subTypeType !== "object" || !("type" in subTypeType!) || !("mappings" in subTypeType) || typeof subTypeType.mappings !== "object") {
			unhandledType(subTypeName, subTypeType, "Invalid enum type");
			return "";
		}

		// if not called from main, it means its a nested enum which needs to be refrenced
		// otherwise the enum is just being declared
		if (!calledFromMain)
			output += `    ${name}: ${parseEnum(longNameForEnum, subTypeType.mappings!)};\n`;
		else
			parseEnum(longNameForEnum, subTypeType.mappings!);
	}

	else {
		console.error(`Unimplemented!\n realType: ${subTypeName}\n value: `, subTypeType);
	}

	return output;
}


writeFileSync("./typings/output/hoistedEnums.d.ts", hoistedEnums, "utf8");