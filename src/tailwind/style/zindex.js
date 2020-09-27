import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix } = configOptions;

const prefix = `${globalPrefix}z`;

const zIndex = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, "auto"];

const responsiveCssString = generateCss(
  ({ orientationPrefix, getCssByOptions }) => {
    const cssString = getCssByOptions(
      zIndex,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          z-index: ${value};
        }
      `
    );
    return cssString;
  }
);

cssHash(() => responsiveCssString);
