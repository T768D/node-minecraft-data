
/** Enums cannot be inside interfaces and types, therefore must be hosted */
export let hoistedEnums = "// Because enums cannot be nested within other types, they must all be hoisted\n\n";

const usedNames = new Map<string, number>();

/**
 * This replaces the '/' in the enum (eg villager/variant) with a -
 * Because TS enums dont support '/' being in them
 * This does not affect the packets as its just a enum, so at compile time it would be converted to a literal number
 */
export function parseEnum(name: string, type: object) {

	// enums cant start with num, quick fix
	if (!isNaN(Number(name[0])))
		name = "a" + name;

	const used = usedNames.get(name);
	if (used) {
		usedNames.set(name, used + 1);
		// adds number at the end of name to prevent duplicates
		// as some enums have the same names due to the last 2 parent containers having the same names
		name += `_${used + 1}`;
	}
	else
		usedNames.set(name, 1);


	hoistedEnums += `const enum ${name} {\n`;

	for (const [key, value] of Object.entries(type))
		hoistedEnums += `    "${value.replaceAll("/", "_")}" = ${key},\n`;

	hoistedEnums += "}\n\n";

	return name;
}