import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix } = configOptions;

const prefix = `${globalPrefix}overflow`;

const overflow = ["auto", "hidden", "visible", "scroll"];

let responsiveCssString = generateCss(
  ({ orientationPrefix, getCssByOptions }) => {
    let cssString = getCssByOptions(
      overflow,
      (key, value) => `
        .${orientationPrefix}${prefix}-${key} {
          overflow: ${value};
        }
        .${orientationPrefix}${prefix}-x-${key} {
          overflow-x: ${value};
        }
        .${orientationPrefix}${prefix}-y-${key} {
          overflow-y: ${value};
        }
      `
    );
    cssString += `
      .${orientationPrefix}${globalPrefix}scrolling-touch {
        -webkit-overflow-scrolling: touch;
      }
      .${orientationPrefix}${globalPrefix}scrolling-auto {
        -webkit-overflow-scrolling: auto;
      }
    `;
    return cssString;
  }
);

cssHash(() => responsiveCssString);
