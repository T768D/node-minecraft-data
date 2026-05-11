import { subArrayHandling } from "./subArrayHandling.mjs";

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
export function parseContainer(container: { name: string, type: unknown; }[], containerName: string): string {
	let tempOutput = "{\n";
	for (const dict of container) {
		if (typeof dict !== "object") {
			console.error("Dict is not object type in parseContainer, dict parsing skipped", dict);
		}


		else if (!dict.type) {
			console.warn("Type property of a dict is not defined in parseContainer, defaulting to unknown");
			tempOutput += `    ${dict.name}: "unknown;\n`;
		}

		else if (Array.isArray(dict.type)) {
			tempOutput += subArrayHandling(dict.name, dict.type[0], dict.type[1], false, `${containerName}_${dict.name}`);
		}

		else if (typeof dict.type !== "string") {
			tempOutput += `    ${dict.name}: unknown;\n`;
		}

		else {
			// dict.type could be smth like u8 which would be defined in the outer loop
			tempOutput += `    ${dict.name}: ${dict.type || "unknown"};\n`;
		}
	}

	return tempOutput + "}\n\n";
}