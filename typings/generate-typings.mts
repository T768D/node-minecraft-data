import example from "./example.json" with { type: "json" };
import { writeFileSync, rmSync, readdirSync } from "fs";

import { hoistedEnums } from "./modules/parseEnum.mjs";
import { subArrayHandling } from "./modules/subArrayHandling.mjs";


for (const filePath of readdirSync("./typings/output"))
	rmSync("./typings/output/" + filePath);


// switch cannot be a type, and void is already a ts type
const ignoredTypes = new Set(["switch", "void", "string"]);
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
		for (const [subSectionName, subData] of Object.entries(data))
			generateTypes(`${sectionNameHistory}_${subSectionName}`, subSectionName, subData);

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

			typesOutput += subArrayHandling(name, type[0], type[1], "topLevel");
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


writeFileSync("./typings/output/hoistedEnums.d.ts", hoistedEnums, "utf8");