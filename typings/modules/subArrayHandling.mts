import { parseContainer } from "./parseContainer.mjs";
import { parseEnum } from "./parseEnum.mjs";


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