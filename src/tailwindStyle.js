import { cssHash } from "css-hash";

import generateTailwindCss from "tailwind-css-generator";

const cssString = generateTailwindCss();

cssHash(() => cssString);
