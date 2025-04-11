import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/tailwind_to_style/index.js",
    output: {
      file: "dist/tailwind-to-style.js",
      format: "cjs",
    },
    plugins: [json()],
  },
  {
    input: "src/tailwind_to_style/index.min.js",
    output: {
      file: "dist/tailwind-to-style.min.js",
      format: "umd",
      name: "twsx",
    },
    plugins: [json(), terser()],
  },
];
