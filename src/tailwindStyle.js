import { cssHash } from "css-hash";

import generateTailwindCss from "tailwind-generators";

console.log(generateTailwindCss());

cssHash(() => generateTailwindCss());
