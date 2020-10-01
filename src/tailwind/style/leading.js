import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix, lineHeight } = configOptions;

const prefix = `${globalPrefix}leading`;

const responsiveCssString = generateCss(
  ({ orientationPrefix, getCssByOptions }) => {
    const cssString = getCssByOptions(
      lineHeight,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          line-height: ${value};
        }
      `
    );
    return cssString;
  }
);

cssHash(() => responsiveCssString);
