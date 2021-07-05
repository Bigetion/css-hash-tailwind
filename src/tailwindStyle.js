import { cssHash } from "css-hash";

import { generateAll } from "tailwind-css-generator";

import generateTailwindCss from "tailwind-generators";

console.log(generateTailwindCss());

cssHash(() => generateAll());
