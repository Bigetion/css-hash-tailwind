import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const {
  prefix: globalPrefix,
  screens,
  spacing,
  extendWidth = {},
  maxWidth,
} = configOptions;

const prefix = "w";

const responsiveCssString = generateCss(
  ({ orientationPrefix, getCssByOptions }) => {
    let cssString = getCssByOptions(
      Object.assign(spacing, extendWidth),
      (key, value) => {
        const k = key.replace("/", `\\/`);
        return `
          .${orientationPrefix}${globalPrefix}${prefix}-${k} {
            width: ${value}; 
          }
        `;
      }
    );
    cssString += getCssByOptions(
      maxWidth,
      (key, value) => `
        .${orientationPrefix}${globalPrefix}max-${prefix}-${key} {
          max-width: ${value};
        }
      `
    );
    cssString += getCssByOptions(
      screens,
      (key, value) => `
        .${orientationPrefix}${globalPrefix}max-${prefix}-screen-${key} {
          max-width: ${value};
        }
      `
    );
    cssString += `
      .${orientationPrefix}${globalPrefix}min-${prefix}-0 {
        min-width: 0;
      }
      .${orientationPrefix}${globalPrefix}min-${prefix}-full {
        min-width: 100%;
      }
      .${orientationPrefix}${globalPrefix}min-${prefix}-screen {
        min-width: 100vw;
      }
    `;
    return cssString;
  }
);

cssHash(() => responsiveCssString);
