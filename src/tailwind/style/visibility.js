import { cssHash } from "css-hash";

import { generateCss } from "../utils";

const responsiveCssString = generateCss(
  ({ orientationPrefix }) => `
    .${orientationPrefix}visible {
      visibility: visible;
    }
    .${orientationPrefix}invisible {
      visibility: hidden;
    }
  `
);

cssHash(() => responsiveCssString);
