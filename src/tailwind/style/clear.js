import { cssHash } from "css-hash";

import { generateCss } from "../utils";

const prefix = "clear";

const clear = ["left", "right", "both", "none"];

const responsiveCssString = generateCss(({ orientationPrefix }) => {
  const generateClear = () => {
    let str = "";
    clear.forEach((item) => {
      str += `
        .${orientationPrefix}${prefix}-${item} {
          clear: ${item};
        }
      `;
    });
    return str;
  };

  const cssString = generateClear();
  return cssString;
});

cssHash(() => responsiveCssString);
