import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix } = configOptions;

const prefix = `${globalPrefix}overscroll`;

const overscroll = ["auto", "contain", "none"];

const responsiveCssString = generateCss(
  ({ orientationPrefix, getCssByOptions }) => {
    const cssString = getCssByOptions(
      overscroll,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          overscroll-behavior: ${value};
        }
        .${orientationPrefix}${prefix}-x-${key} {
          overscroll-behavior-x: ${value};
        }
        .${orientationPrefix}${prefix}-y-${key} {
          overscroll-behavior-y: ${value};
        }
      `
    );
    return cssString;
  }
);

cssHash(() => responsiveCssString);
