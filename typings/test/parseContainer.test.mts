import { parseContainer } from "../modules/parseContainer.mjs";
import { makeAssert } from "./_globals.mjs";


// could stick all of it into a big array but would have to deal with indentation within the strings

const sample1 =
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
	}];

const expected1 = `{
    red: f32;
    green: f32;
    blue: f32;
    scale: f32;
}`;


const samples = [sample1];
const expecteds = [expected1];


if (samples.length !== expecteds.length)
	throw new Error("Samples and Expecteds are not the same length");

const assert = makeAssert(parseContainer);
for (let x = 0; x < samples.length; x++) {
	// replaces all tabs with spaces for consistancy, newline at end as func adds one
	assert(samples[x], expecteds[x]!.replaceAll("	", "    ") + "\n");
}