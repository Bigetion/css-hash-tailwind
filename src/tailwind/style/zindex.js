import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix } = configOptions;

const prefix = `${globalPrefix}z`;

const zIndex = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, "auto"];

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
