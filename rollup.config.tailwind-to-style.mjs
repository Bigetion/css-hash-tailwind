import json from "@rollup/plugin-json";

export default {
	input: "src/tailwind_to_style/index.js",
	output: [
		{
			file: "dist/tailwind-to-style.js",
			format: "cjs",
		},
	],
	plugins: [json()],
};
