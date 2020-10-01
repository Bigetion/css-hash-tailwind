import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix, zIndex } = configOptions;

const prefix = `${globalPrefix}z`;

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
