import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix, letterSpacing } = configOptions;

const prefix = `${globalPrefix}tracking`;

const responsiveCssString = generateCss(
  ({ orientationPrefix, getCssByOptions }) => {
    const cssString = getCssByOptions(
      letterSpacing,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          letter-spacing: ${value};
        }
      `
    );
    return cssString;
  }
);

cssHash(() => responsiveCssString);
