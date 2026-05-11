import { parseEnum } from "./parseEnum.mjs";
import { parseContainer } from "./parseContainer.mjs";


const unhandledTypeInfo = "// Unhandled type when generating typescript declaration file. This type will default to unknown for type saftey\n";
function unhandledType(type: unknown, msg: string) {
	console.error(msg + ". 2 Unhandled type or data structure:", type);
}

// bitfields should have only name, size and signed but no checks are made to ensure they are
function getBitFieldMsg(bitFieldData: { name: string; size: number; signed: boolean; }[]) {
	let bitOffset = 0;
	let lines = `
    /**
     * This is a bitfield
     * Format: (name : bits a-b : signed)
`;

	for (const item of bitFieldData) {
		if (!item.name || !item.size || !item.signed) {
			console.error("Invalid bitfield data! ", item);
		}


		lines += `     * ${item.name || "Unable to parse"} : ${bitOffset}-${bitOffset + item.size - 1} : ${item.signed}\n`;
		bitOffset += item.size;
	}

	return lines + "    */\n";
}

// add jsdoc later
export function subArrayHandling(name: string, subTypeType: string, subTypeData: unknown, calledFromTopLevel: boolean, longNameForEnum: string = name): string {

	// todo, handle other types of type[1]
	if (subTypeType === "container" && Array.isArray(subTypeData)) {
		// parseContainer only returns object, does not declare interface or type
		// parseContainer already returns newlines so no need to add them
		if (calledFromTopLevel)
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

			// TODO MAKE THIS A RECURSIVE CALL

			// switches can have nested containers in them
			else if (Array.isArray(value) && value[0] === "container")
				nestedVariations += " | \n" + parseContainer(value[1], key).trim();

			else if (tempSubTypeData.default)
				console.error("Unhandled subTypeData: ", tempSubTypeData);
		}

		// sometimes fields can be a empty object
		if (variations.size === 0 && nestedVariations.length === 0)
			return "";

		// order the variations the ones from parseContainer go at the bottom
		return `    ${name}: ${Array.from(variations).join(" | ")} ${nestedVariations};\n`;
	}


	// mapper is a enum
	if (subTypeType === "mapper") {
		// we assume all enums are numerical, for string enum handling might as well use parseContainer if there are string enums
		if (typeof subTypeData !== "object" || !("type" in subTypeData!) || !("mappings" in subTypeData) || typeof subTypeData.mappings !== "object") {
			unhandledType(subTypeData, "Invalid enum type");

			const symbol = calledFromTopLevel ? " =" : ":";
			return `${unhandledTypeInfo}    ${name}${symbol} unknown`;
		}

		// if not called from main, it means its a nested enum which needs to be refrenced
		// otherwise the enum is just being declared
		if (!calledFromTopLevel)
			return `    ${name}: ${parseEnum(longNameForEnum, subTypeData.mappings!)};\n`;

		parseEnum(longNameForEnum, subTypeData.mappings!);
		return "";
	}


	if (subTypeType === "option") {
		if (typeof subTypeData === "string")
			return `    ${name}?: ${subTypeData};\n`;

		if (typeof subTypeData === "object" && Array.isArray(subTypeData)) {
			const parsedChild = subArrayHandling(name, subTypeData[0], subTypeData[1], calledFromTopLevel, longNameForEnum)
				// first occurence of the : would be the outermost property
				.replace(":", "?:");
			return `    ${parsedChild}`;
		}

		unhandledType(subTypeData, "Invalid subTypeData when subTypeType is option");
		return `    ${name}?: unknown;\n`;
	}


	if (subTypeType === "array") {
		if (typeof subTypeData !== "object" || !("type" in subTypeData!)) {
			unhandledType(subTypeData, "subTypeData is not a valid array");
			return `    ${name}: unknown[];\n`;
		}

		if (typeof subTypeData.type === "string")
			return `    ${name}: ${subTypeData.type}[];\n`;

		if (typeof subTypeData.type === "object") {
			if (Array.isArray(subTypeData.type))
				// adds indent if not called from top level
				return (calledFromTopLevel ? "" : "    ") + subArrayHandling(name, subTypeData.type[0], subTypeData.type[1], calledFromTopLevel, longNameForEnum);
		}

		unhandledType(subTypeData, "subTypeData is not a valid array 2");
		return `    ${name}: unknown[];\n`;
	}


	if (subTypeType === "bitfield") {
		if (!Array.isArray(subTypeData)) {
			unhandledType(subTypeData, "subTypeData is not a valid bitfield! Unable to generate comment!");
			return `/** Unable to generate bitfield comment from data */\n    ${name}: number;\n`;
		}

		return `${getBitFieldMsg(subTypeData)}    ${name}: number;\n`;
	}


	console.error(`Unimplemented!\n realType: ${subTypeType}\n value: `, subTypeData);
	return "";
}