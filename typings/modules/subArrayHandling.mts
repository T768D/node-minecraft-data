import { parseEnum } from "./parseEnum.mjs";
import { parseContainer } from "./parseContainer.mjs";


const unhandledTypeInfo = "// Unhandled type when generating typescript declaration file. This type will default to unknown for type saftey\n";
function unhandledType(type: unknown, msg: string) {
	console.error(msg + ". 2 Unhandled type or data structure:", type);
}


// bitfields should have only name, size and signed but no checks are made to ensure they are
function getBitFieldMsg(bitFieldData: { name: string; size: number; signed: boolean; }[]): string[] {
	let bitOffset = 0;
	const lines = [
		"/**",
		" * This is a bitfield",
		" * Format: (name : bits a-b : signed)"
	];

	for (const item of bitFieldData) {
		if (!item.name || item.size === undefined || item.signed === undefined)
			console.error("Invalid bitfield data! ", item);


		lines.push(` * ${item.name || "Unable to parse"} : ${bitOffset}-${bitOffset + item.size - 1} : ${item.signed}`);
		bitOffset += item.size;
	}

	lines.push("*/");
	return lines;
}


/**
 * Helper function to format and return the values of realSubArrayHandling based on the param type
 * @param name The name of the closest parent with a name of the current subArray being parsed
 * @param subTypeType The type of the subArray (eg container, switch, mapper)
 * @param subTypeData The data of the subArray
 * @param type Where in the structure of the contents being parsed is the function being called
 * @param longNameForEnum The full trace of all the parent's names the function has been through, only used for enums right now
 * @returns a TypeScript type definition
 */
export function subArrayHandling(name: string, subTypeType: string, subTypeData: unknown, type: "topLevel" | "nested" | "valueOnly", longNameForEnum: string = name): string {

	const result = subArrayHandlingHelper(name, subTypeType, subTypeData, type === "topLevel", longNameForEnum);
	if (result === "")
		return "";

	let returnVal = "";

	if (type === "topLevel") {
		result.declaration ??= "type";
		const assignSymbol = result.declaration === "type" ? " =" : "";

		if (result.comment)
			returnVal += result.comment.join("\n") + "\n";

		return returnVal + `${result.declaration} ${name}${assignSymbol} ${result.value}`;
	}

	else if (type === "nested") {
		if (result.comment)
			returnVal += "    " + result.comment.join("\n    ") + "\n";

		return returnVal + `    ${name}${result.isOptional ? "?" : ""}: ${result.value}`;
	}

	else if (type === "valueOnly") {
		return result.value;
	}

	else
		throw new Error("shouldnt happen");
}


/** @see subArrayHandling */
function subArrayHandlingHelper(
	name: string, subTypeType: string, subTypeData: unknown,
	calledFromTopLevel: boolean, longNameForEnum: string
): "" | {
	declaration?: "interface" | "type" | "const enum";
	value: string;
	isOptional?: true,
	/** Each array item is another comment line */
	comment?: string[];
} {

	// todo, handle other types of type[1]
	if (subTypeType === "container" && Array.isArray(subTypeData)) {
		// parseContainer only returns object, does not declare interface or type
		// parseContainer already returns newlines so no need to add them
		return {
			declaration: "interface",
			value: parseContainer(subTypeData, longNameForEnum)
		};
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
		fields.push([`${longNameForEnum}_default`, tempSubTypeData.default]);

		for (const [key, value] of fields) {
			if (typeof value === "string") {
				if (value === "void")
					variations.add("undefined");
				else
					variations.add(value);
			}

			// TODO MAKE THIS A RECURSIVE CALL

			// switches can have nested containers in them
			else if (Array.isArray(value) && value[0] === "container")
				nestedVariations += " | \n" + parseContainer(value[1], key).trim();

			else if (tempSubTypeData.default)
				console.error("Unhandled subTypeData: ", tempSubTypeData);
		}

		// sometimes fields can be a empty object
		if (variations.size === 0 && nestedVariations.length === 0)
			return {
				value: "undefined;\n"
			};

		// order the variations the ones from parseContainer go at the bottom
		return {
			value: Array.from(variations).join(" | ") + " " + nestedVariations + ";\n"
		};
	}


	// mapper is a enum
	if (subTypeType === "mapper") {
		// we assume all enums are numerical, for string enum handling might as well use parseContainer if there are string enums
		if (typeof subTypeData !== "object" || !("type" in subTypeData!) || !("mappings" in subTypeData) || typeof subTypeData.mappings !== "object") {
			unhandledType(subTypeData, "Invalid enum type");
			return {
				comment: [unhandledTypeInfo],
				declaration: "const enum",
				value: "unknown"
			};
		}

		// if not called from main, it means its a nested enum which needs to be refrenced
		// otherwise the enum is just being declared
		if (!calledFromTopLevel)
			return {
				declaration: "const enum",
				value: parseEnum(longNameForEnum, subTypeData.mappings!) + ";\n"
			};

		parseEnum(longNameForEnum, subTypeData.mappings!);
		return "";
	}


	if (subTypeType === "option") {
		if (typeof subTypeData === "string")
			return {
				isOptional: true,
				value: subTypeData + ";\n"
			};

		if (typeof subTypeData === "object" && Array.isArray(subTypeData)) {
			return {
				isOptional: true,
				value: subArrayHandling(name, subTypeData[0], subTypeData[1], "valueOnly", longNameForEnum)
			};
		}

		unhandledType(subTypeData, "Invalid subTypeData when subTypeType is option");
		return {
			isOptional: true,
			value: "unknown"
		};
	}


	if (subTypeType === "array") {
		if (typeof subTypeData !== "object" || !("type" in subTypeData!)) {
			unhandledType(subTypeData, "subTypeData is not a valid array");
			return {
				value: "unknown[]"
			};
		}

		if (typeof subTypeData.type === "string")
			return {
				value: `${subTypeData.type}[];\n`
			};

		if (typeof subTypeData.type === "object") {
			if (Array.isArray(subTypeData.type))
				return {
					value: subArrayHandling(name, subTypeData.type[0], subTypeData.type[1], "valueOnly", longNameForEnum)
				};
		}

		unhandledType(subTypeData, "subTypeData is not a valid array 2");
		return {
			value: "unknown[]"
		};
	}


	if (subTypeType === "bitfield") {
		if (!Array.isArray(subTypeData)) {
			unhandledType(subTypeData, "subTypeData is not a valid bitfield! Unable to generate comment!");
			return {
				comment: ["/** Unable to generate bitfield comment from data */"],
				value: "number"
			};
		}

		return {
			comment: getBitFieldMsg(subTypeData),
			value: "number;\n"
		};
	}


	console.error(`Unimplemented!\n realType: ${subTypeType}\n value: `, subTypeData);
	return {
		comment: ["// Unimplemented value"],
		value: "unknown;\n"
	};
}