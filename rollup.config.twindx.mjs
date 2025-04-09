import json from "@rollup/plugin-json";

export default {
	input: "src/twindx/index.js",
	output: [
		{
			file: "dist/twindx.js",
			format: "cjs",
		},
	],
	plugins: [json()],
};
