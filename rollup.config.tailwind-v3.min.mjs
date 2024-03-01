import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

export default {
	input: "src/tailwind_v3/index.min.js",
	output: [
		{
			file: "dist/tailwind-css-generator.min.js",
			format: "iife",
			name: "version",
			plugins: [terser()],
		},
	],
	plugins: [json()],
};
