
/** Enums cannot be inside interfaces and types, therefore must be hosted */
export let hoistedEnums = "";

/**
 * This replaces the '/' in the enum (eg villager/variant) with a -
 * Because TS enums dont support '/' being in them
 * This does not affect the packets as its just a enum, so at compile time it would be converted to a literal number
 */
export function parseEnum(name: string, type: object) {

	hoistedEnums += `const enum ${name} {\n`;

	for (const [key, value] of Object.entries(type))
		hoistedEnums += `    ${value.replaceAll("/", "_")} = ${key},\n`;

	hoistedEnums += "}\n\n";

	return name;
}