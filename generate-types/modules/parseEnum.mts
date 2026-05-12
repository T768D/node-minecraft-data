/** Enums cannot be inside interfaces and types, therefore must be hosted */
export let hoistedEnums = "// Because enums cannot be nested within other types, they must all be hoisted\n\n";
const usedNames = new Map<string, number>();

export function clearData() {
	usedNames.clear();
	hoistedEnums = "// Because enums cannot be nested within other types, they must all be hoisted\n\n";
}


function cleanName(name: string): string {
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

	return name;
}

/**
 * This replaces the '/' in the enum (eg villager/variant) with a -
 * Because TS enums dont support '/' being in them
 * This does not affect the packets as its just a enum, so at compile time it would be converted to a literal number
 */
export function parseEnum(name: string, type: object) {

	name = cleanName(name);
	hoistedEnums += `declare const enum ${name} {\n`;

	// json cant have objects as keys so always assume its Record<string,unknown>
	for (const [key, value] of Object.entries(type as Record<string, unknown>)) {
		if (typeof value !== "string") {
			console.error("Invalid value passed into enum", value, type);
			continue;
		}

		hoistedEnums += `    "${value.replaceAll("/", "_")}" = ${key},\n`;
	}

	hoistedEnums += "}\n\n";

	return name;
}


/**
 * @example flags is data param, type is ignored and assumed to be number, name is PositionUpdatedRelatives 
 * ```json
	"PositionUpdateRelatives": [
		"bitflags", {
			"type": "u32",
			"flags": [
				"x",
				"y",
				"z",
				"yaw",
				"pitch",
				"dx",
				"dy",
				"dz",
				"yawDelta"
			]
		}
	]
 */
export function parseBitflags(name: string, data: unknown[]) {

	name = cleanName(name);
	hoistedEnums += `declare const enum ${name} {\n`;

	for (let shiftLevel = 0; shiftLevel < data.length; shiftLevel++) {
		const item = data[shiftLevel];

		if (typeof item !== "string") {
			console.error("Invalid item in bitfield data!", item);
			hoistedEnums += `    unknown = 1 << ${shiftLevel},`;
			continue;
		}

		hoistedEnums += `    ${item} = 1 << ${shiftLevel},\n`;
	}

	hoistedEnums += "}\n\n";
}