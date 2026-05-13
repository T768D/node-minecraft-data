declare global {
	interface ArrayConstructor {
		isArray(arg: unknown): arg is unknown[];
	}

	interface ObjectConstructor {
		entries<T>(object: T): [keyof T, T[keyof T]][];
		keys<T>(object: T): (keyof T)[];
		values<T>(object: T): (T[keyof T])[];
	}

	interface ReadonlyArray<T> {
		includes(searchElement: unknown, fromIndex?: number): searchElement is T;
	}

	interface Array<T> {
		includes(searchElement: unknown, fromIndex?: number): searchElement is T;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface Set<T> {
		has(value: unknown): boolean;
	}
}


// switch cannot be a type, and void is already a ts type
export const ignoredTypes = new Set(["switch", "void", "string"]);
// No types in ignoredTypes should be present in someTypes
export const baseTypes = {
	varint: "number",
	varlong: "bigint",
	optvarint: "number | null",
	pstring: "string",
	buffer: "Buffer",
	u8: "number",
	u16: "number",
	u32: "number",
	u64: "bigint",
	i8: "number",
	i16: "number",
	i32: "number",
	i64: "bigint",
	bool: "boolean",
	f32: "number",
	f64: "number",
	UUID: "string",
	option: "unknown",
	entityMetadataLoop: "unknown[]",
	topBitSetTerminatedArray: "unknown[]",
	bitfield: "number",
	bitflags: "number",
	container: "Record<string, unknown>",
	array: "unknown[]",
	restBuffer: "Buffer",
	anonymousNbt: "unknown",
	anonOptionalNbt: "unknown | null",
	registryEntryHolder: "unknown",
	registryEntryHolderSet: "unknown[]",
	lpVec3: "{ x: number; y: number; z: number }"
} as Record<string, string>;