export function makeAssert(func: Function) {
	return function(...input: unknown[]) {
		let expected = input.pop();
		if (typeof expected === "string")
			expected = expected.trim();

		let actual = func(...input);
		if (typeof actual === "string")
			actual = actual.trim()

		console.assert(
			actual === expected,
			`FAILED. Input: ${JSON.stringify(input, null, 4)}\n\n Expected: ${expected}\n Got: ${actual}`
		);
	};
};