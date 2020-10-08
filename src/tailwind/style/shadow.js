import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix, boxShadow } = configOptions;

const prefix = `${globalPrefix}shadow`;

const responsiveCssString = generateCss(
  ({ pseudoClass, getCssByOptions, getCssFromColors }) => {
    let cssString = getCssByOptions(boxShadow, (key, value) => {
      const k = key !== "default" ? `-${key}` : "";
      return `
        ${pseudoClass(`${prefix}${k}`)} {
          box-shadow: ${value};
        }
      `;
    });
    cssString += getCssFromColors((colorName, htmlColor, rgbColor) => {
      let str = "";
      if (htmlColor !== "transparent") {
        str += `
          ${pseudoClass(`${prefix}-outline-${colorName}`)} {
            box-shadow: 0 0 0 3px rgba(${rgbColor}, 0.5) !important;
          }
        `;
      }
      return str;
    });
    return cssString;
  }
);

cssHash(() => responsiveCssString);
