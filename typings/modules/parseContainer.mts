import { parseNestedType } from "./parseNestedType.mjs";

/**
 * @param container The container object
 * @returns Only returns object type, does not declare interface or type
 * @example ```ts
	[{
		"name": "red",
		"type": "f32"
	},
	{
		"name": "green",
		"type": "f32"
	},
	{
		"name": "blue",
		"type": "f32"
	},
	{
		"name": "scale",
		"type": "f32"
	}]
	```
	returns
	```ts
	{
		red: f32;
		green: f32;
		blue: f32;
		scale: f32;
	}
	```
 */
export function parseContainer(container: Record<string, string>[]): string {
	let tempOutput = "{\n";
	for (const dict of container) {
		if (typeof dict !== "object") {
			console.error("Dict is not object type in parseContainer, dict parsing skipped", dict);
			continue;
		}

		if (!dict.name) {
			console.error("Name property of a container dict is not defined in parseContainer, property skipped");
			continue;
		}

		if (!dict.type) {
			console.warn("Type property of a dict is not defined in parseContainer, defaulting to unknown");
			tempOutput += `    ${dict.name}: "unknown;\n`;
			continue;
		}

		if (typeof dict.type !== "string") {
			tempOutput += `    ${dict.name}: ${parseNestedType(dict.type)};\n`;
			continue;
		}

		// dict.type could be smth like u8 which would be defined in the outer loop
		tempOutput += `    ${dict.name}: ${dict.type ?? "unknown"};\n`;
	}

	return tempOutput + "}\n\n";
}