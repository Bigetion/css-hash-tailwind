import { cssHash } from "css-hash";

import generateTailwindCss from "tailwind-generators";

cssHash(() => generateTailwindCss().replace(/\s\s+/g, ' '));
