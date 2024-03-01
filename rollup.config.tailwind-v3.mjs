import json from "@rollup/plugin-json";

export default {
	input: "src/tailwind_v3/index.js",
	output: [
		{
			file: "dist/tailwind-css-generator.js",
			format: "cjs",
		},
	],
	plugins: [json()],
};
