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
		if (typeof dict === "string") {
			console.error("Unhandled dict is typeof string", dict);
			break;
		}

		if (!("name" in dict && "type" in dict && typeof dict.type === "string"))
			continue;

		// dict.type could be smth like u8 which would be defined in the outer loop
		tempOutput += `    ${dict.name}: ${dict.type ?? "unknown"};\n`;
	}

	tempOutput += "}\n";
	return tempOutput + "\n";
}