// could stick all of it into a big array but would have to deal with indentation within the strings

const sample1 = [
	{
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
	}
];
const expected1 = `{
    red: f32;
    green: f32;
	blue: f32;
    scale: f32;
}`;


const sample2 = [
	{
		"name": "boundingBoxMin",
		"type": "position"
	},
	{
		"name": "boundingBoxMax",
		"type": "position"
	},
	{
		"name": "isStart",
		"type": "bool"
	}
];
const expected2 = `{
	boundingBoxMin: position;
	boundingBoxMax: position;
	isStart: bool;
}`;

export const samples = [sample1, sample2];
export const expecteds = [expected1, expected2];