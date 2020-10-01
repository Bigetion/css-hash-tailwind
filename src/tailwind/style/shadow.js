import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix, boxShadow } = configOptions;

const prefix = `${globalPrefix}shadow`;

const responsiveCssString = generateCss(({ pseudoClass, getCssByOptions }) => {
  const cssString = getCssByOptions(boxShadow, (key, value) => {
    const k = key !== "default" ? `-${key}` : "";
    return `
      ${pseudoClass(`${prefix}${k}`)} {
        box-shadow: ${value};
      }
    `;
  });
  return cssString;
});

cssHash(() => responsiveCssString);
