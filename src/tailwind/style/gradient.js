import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix } = configOptions;

const prefix = `${globalPrefix}bg`;

const responsiveCssString = generateCss(({ pseudoClass, getCssFromColors }) => {
  let cssString = getCssFromColors((colorName, htmlColor, rgbColor) => {
    let str = "";
    if (htmlColor === "transparent") {
      str += `
        ${pseudoClass(`${globalPrefix}from-${colorName}`)} {
          --gradient-from-color: transparent;
          --gradient-color-stops: var(--gradient-from-color),var(--gradient-to-color,rgba(255,255,255,0));
        }
        ${pseudoClass(`${globalPrefix}via-${colorName}`)} {
          --gradient-via-color: transparent;
          --gradient-color-stops: var(--gradient-from-color),var(--gradient-via-color),var(--gradient-to-color,rgba(255,255,255,0));
        }
        ${pseudoClass(`${globalPrefix}to-${colorName}`)} {
          --gradient-to-color: transparent;
          --gradient-color-stops: var(--gradient-from-color),var(--gradient-to-color,rgba(255,255,255,0));
        }
      `;
    } else {
      str += `
        ${pseudoClass(`${globalPrefix}from-${colorName}`)} {
          --gradient-from-color: ${htmlColor};
          --gradient-color-stops: var(--gradient-from-color),var(--gradient-to-color,rgba(${rgbColor},0));
        }
        ${pseudoClass(`${globalPrefix}via-${colorName}`)} {
          --gradient-via-color: ${htmlColor};
          --gradient-color-stops: var(--gradient-from-color),var(--gradient-via-color),var(--gradient-to-color,rgba(${rgbColor},0));
        }
        ${pseudoClass(`${globalPrefix}to-${colorName}`)} {
          --gradient-to-color: ${htmlColor};
          --gradient-color-stops: var(--gradient-from-color),var(--gradient-to-color,rgba(${rgbColor},0));
        }
      `;
    }
    return str;
  });

  cssString += `
    ${pseudoClass(`${prefix}-gradient-to-r`)} {
      background-image: linear-gradient(to right,var(--gradient-color-stops));
    }
    ${pseudoClass(`${prefix}-gradient-to-top`)} {
      background-image: linear-gradient(to top,var(--gradient-color-stops));
    }
  `;

  return cssString;
});

console.log(responsiveCssString);

cssHash(() => responsiveCssString);
