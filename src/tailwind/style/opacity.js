import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import { opacity } from "../constants";

const prefix = "opacity";

const responsiveCssString = generateCss(({ pseudoClass }) => {
  const generateClear = () => {
    let str = "";
    Object.entries(opacity).forEach(([key, value]) => {
      str += `
        ${pseudoClass(`${prefix}-${key}`)} {
          opacity: ${value};
        }
      `;
    });
    return str;
  };

  const cssString = generateClear();
  return cssString;
});

cssHash(() => responsiveCssString);
