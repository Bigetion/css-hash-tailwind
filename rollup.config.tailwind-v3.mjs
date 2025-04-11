import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/tailwind_v3/index.js",
    output: {
      file: "dist/tailwind-v3.js",
      format: "cjs",
    },
    plugins: [json()],
  },
  {
    input: "src/tailwind_v3/index.min.js",
    output: {
      file: "dist/tailwind-v3.min.js",
      format: "umd",
      name: "twsx",
    },
    plugins: [json(), terser()],
  },
];
