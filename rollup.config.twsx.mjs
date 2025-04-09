import json from "@rollup/plugin-json";

export default {
	input: "src/twsx/index.js",
	output: [
		{
			file: "dist/twsx.js",
			format: "cjs",
		},
	],
	plugins: [json()],
};
