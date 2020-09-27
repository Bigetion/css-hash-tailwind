import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix } = configOptions;

const prefix = `${globalPrefix}clear`;

const clear = ["left", "right", "both", "none"];

const responsiveCssString = generateCss(
  ({ orientationPrefix, getCssByOptions }) => {
    const cssString = getCssByOptions(
      clear,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          clear: ${value};
        }
      `
    );
    return cssString;
  }
);

cssHash(() => responsiveCssString);
