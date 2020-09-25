import { cssHash } from "css-hash";

import { generateCss } from "../utils";

const prefix = "z";

const zIndex = [0, 10, 20, 30, 40, 50, "auto"];

const responsiveCssString = generateCss(({ orientationPrefix }) => {
  const generateClear = () => {
    let str = "";
    zIndex.forEach((item) => {
      str += `
        .${orientationPrefix}${prefix}-${item} {
          z-index: ${item};
        }
      `;
    });
    return str;
  };

  const cssString = generateClear();
  return cssString;
});

cssHash(() => responsiveCssString);
