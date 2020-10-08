import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix, extendStrokeWidth = {} } = configOptions;

const strokeWidth = { 1: 1, 2: 2, 3: 3 };

const responsiveCssString = generateCss(
  ({ orientationPrefix, getCssByOptions }) => {
    let cssString = `
      .${orientationPrefix}${prefix}fill-current {
        fill: currentColor;
      }
      .${orientationPrefix}${prefix}stroke-current {
        stroke: currentColor;
      }
    `;
    cssString += getCssByOptions(
      Object.assign(strokeWidth, extendStrokeWidth),
      (key, value) => `
        .${orientationPrefix}${prefix}stroke-${key} {
          stroke-width: ${value};
        }  
      `
    );
    return cssString;
  }
);

cssHash(() => responsiveCssString);
