import { parseContainer } from "../modules/parseContainer.mjs";
import { readdirSync } from "fs";


function makeAssert(func: Function) {
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


for (let module of readdirSync("./typings/test")) {
	module = "./typings/test/" + module;
	// import(module) is broken for some reason
	const { samples, expecteds } = await import(module);

	if (!samples || !expecteds || !Array.isArray(samples) || !Array.isArray(expecteds))
		throw new Error("Invalid exports in module: " + module);

	if (samples.length !== expecteds.length)
		throw new Error("Samples and Expecteds are not the same length in module: " + module);

	const assert = makeAssert(parseContainer);
	for (let x = 0; x < samples.length; x++) {
		// replaces all tabs with spaces for consistancy, newline at end as func adds one
		assert(samples[x], expecteds[x]!.replaceAll("	", "    ") + "\n");
	}
}