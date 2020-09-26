import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix } = configOptions;

const responsiveCssString = generateCss(
  ({ orientationPrefix }) => `
    .${orientationPrefix}${prefix}visible {
      visibility: visible;
    }
    .${orientationPrefix}${prefix}invisible {
      visibility: hidden;
    }
  `
);

cssHash(() => responsiveCssString);
