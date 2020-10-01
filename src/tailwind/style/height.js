import { cssHash } from "css-hash";

import { generateCss } from "../utils";

import configOptions from "../config";

const { prefix: globalPrefix, spacing, extendHeight = {} } = configOptions;

const prefix = `${globalPrefix}h`;

const responsiveCssString = generateCss(
  ({ orientationPrefix, getCssByOptions }) => {
    let cssString = getCssByOptions(
      Object.assign(spacing, extendHeight),
      (key, value) => `
        .${orientationPrefix}${prefix}-${key.replace("/", `\\/`)} {
          height: ${value}; 
        }
      `
    );
    cssString += `
      .${orientationPrefix}min-${prefix}-0 {
        min-height: 0;
      }
      .${orientationPrefix}min-${prefix}-full {
        min-height: 100%;
      }
      .${orientationPrefix}min-${prefix}-screen {
        min-height: 100vh;
      }
      .${orientationPrefix}max-${prefix}-full {
        max-height: 100%;
      }
      .${orientationPrefix}max-${prefix}-screen {
        max-height: 100vh;
      }
    `;
    return cssString;
  }
);

cssHash(() => responsiveCssString);
