import example from "./example.json" with { type: "json" };
import { writeFileSync, rmSync, readdirSync } from "fs";

import { parseContainer } from "./modules/parseContainer.mjs";
import { parseEnum } from "./modules/parseEnum.mjs";


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



for (const [sectionName, data] of Object.entries(example)) {
	console.log("section", sectionName);
	generateTypes(sectionName, sectionName, data);
}

/**
 * @param sectionNameHistory The names of the items the function traversed over to reach the current status, used for the file name. eg handshaking_toClient
 */
function generateTypes(sectionNameHistory: string, sectionName: string, data: typeof example[keyof typeof example]) {

	if (sectionName !== "types") {
		for (const [subSectionName, subData] of Object.entries(data)) {
			generateTypes(`${sectionNameHistory}_${subSectionName}`, subSectionName, subData);
		}
		return;
	}


	let typesOutput = "";

	function unhandledType(name: string, type: unknown) {
		console.error("Unhandled type or data structure:", type);
		typesOutput += `// Unhandled type when generating typescript declaration file. This type will default to unknown for type saftey\ntype ${name} = unknown;`;
	}


	for (const [name, type] of Object.entries(data)) {
		if (ignoredTypes.has(name))
			continue;

		if (type === "native") {
			if (name in baseTypes)
				typesOutput += `type ${name} = ${baseTypes[name]};\n`;
			else
				unhandledType(name, type);
		}

		else if (Array.isArray(type)) {
			const subTypeName = type[0];


			// todo, handle other types of type[1]
			if (subTypeName === "container" && Array.isArray(type[1])) {
				// parseContainer only returns object, does not declare interface or type
				typesOutput += `interface ${name} ${parseContainer(type[1])}`;
			}

			// object can be array too, so check for that
			else if (subTypeName === "switch" && !Array.isArray(type[1]) && typeof type[1] === "object") {
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
				if (!("type" in type) || !("mapping" in type) || typeof type.mapping !== "object" || !type.mapping) {
					unhandledType(name, type);
					continue;
				}

				else if (type.type !== "varint") {
					unhandledType(name, type.type);
					continue;
				}

				typesOutput += parseEnum(name, type.mapping);
			}

			else {
				console.error(`Unimplemented!\n realType: ${subTypeName}\n value: `, type);
			}
		}

		// this must come after array check as arrays are object types too
		else if (typeof type === "object") {
			// pass item through this for loop again, extract this for loop to a function
		}

		// eg "ContainerID": "varint"
		else {
			// no types in someTypes are part of ignoredTypes, therefore if someTypes[type] is defined, we can assume type is not part of ignoredTypes
			typesOutput += `type ${name} = ${type in baseTypes ? type : "unknown"};\n`;
			console.error(`Unimplemented!\n name: ${name}\n value: `, type);
		}
	}

	writeFileSync(`./typings/output/${sectionNameHistory}.d.ts`, typesOutput, "utf8");
}