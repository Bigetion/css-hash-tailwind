import { cssHash } from "css-hash";

import { generateAll } from "tailwind-css-generator";

cssHash(() => generateAll());
