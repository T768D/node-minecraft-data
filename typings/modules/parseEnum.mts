/**
 * This replaces the '/' in the enum (eg villager/variant) with a -
 * Because TS enums dont support '/' being in them
 * This does not affect the packets as its just a enum, so at compile time it would be converted to a literal number
 */
export function parseEnum(name: string, type: object): string {

	let tempOutput = `const enum ${name} {\n`;
	for (const [key, value] of Object.entries(type)) {
		tempOutput += `    ${value.replaceAll("/", "_")} = ${key},\n`;
	}

	return tempOutput + "}\n\n";
}