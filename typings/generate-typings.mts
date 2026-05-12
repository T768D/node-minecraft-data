import { writeFileSync, rmSync, readdirSync, mkdirSync, readFileSync, existsSync } from "fs";
import { ignoredTypes, baseTypes } from "./constantsAndTypes.mjs";

import { clearData, hoistedEnums } from "./modules/parseEnum.mjs";
import { subArrayHandling } from "./modules/subArrayHandling.mjs";


if (existsSync("./types"))
	rmSync("./types", { recursive: true });


/*
	enums.d.ts and types.d.ts are ambient modules
	The rest are modules that need to be exported, this is because sometimes certain things between files will have the same name
	And the differentiater for users is the file name
*/

const versionList = readdirSync("./minecraft-data/data/pc");
for (const version of versionList) {
	// ill think of a better way to implement hoisting enums later
	clearData();

	if (!existsSync(`./minecraft-data/data/pc/${version}/protocol.json`))
		continue;

	mkdirSync(`./types/pc/${version}`, { recursive: true });

	const protocol = JSON.parse(readFileSync(`./minecraft-data/data/pc/${version}/protocol.json`, "utf8")) as Record<string, unknown>;

	for (const [sectionName, data] of Object.entries(protocol))
		generateTypes(sectionName, sectionName, data, `./types/pc/${version}`);

	writeFileSync(`./types/pc/${version}/enums.d.ts`, hoistedEnums, "utf8");

	// tsconfig required otherwise typescript decides it doesn't like it and starts saying types aren't found
	writeFileSync(`./types/pc/${version}/tsconfig.json`, `{"include": [ "./**/*.d.ts" ]}`, "utf8");
}


/**
 * @param sectionNameHistory The names of the items the function traversed over to reach the current status, used for the file name. eg handshaking_toClient
 */
export function generateTypes(
	sectionNameHistory: string,
	sectionName: string,
	data: unknown,
	outDir: string,
): string | void {

	if (sectionName !== "types") {
		for (const [subSectionName, subData] of Object.entries(data))
			generateTypes(`${sectionNameHistory}_${subSectionName}`, subSectionName, subData, outDir);

		return;
	}


	let typesOutput = "";
	function unhandledType(name: string, type: unknown, msg: string) {
		console.error(msg + ". Unhandled type or data structure:", type);
		typesOutput += `// Unhandled type when generating typescript declaration file. This type will default to unknown for type saftey\ntype ${name} = unknown;`;
	}


	for (const [name, type] of Object.entries(data as Record<string, unknown>)) {
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

			if (typeof type[0] !== "string") {
				unhandledType(name, type, "type[0] is not string");
				continue;
			}

			typesOutput += subArrayHandling(name, type[0], type[1], "topLevel", sectionNameHistory === "types");
		}

		// this must come after array check as arrays are object types too
		else if (typeof type === "object") {
			// pass item through this for loop again, extract this for loop to a function
			console.error("unimplemented object");
		}

		// we assume that the type is already defined somewhere else
		// eg type packet_spawn_position = RespawnData; where RespawnData is defined in the program alraedy
		else if (!ignoredTypes.has(type) && typeof type === "string") {
			typesOutput += `type ${name} = ${type};\n`;
		}

		else {
			unhandledType(name, type, "fallthrough");
		}
	}

	writeFileSync(`${outDir}/${sectionNameHistory}.d.ts`, typesOutput.trim(), "utf8");
}