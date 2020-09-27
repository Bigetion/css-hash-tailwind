import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix, opacity } = configOptions;

const prefix = `${globalPrefix}opacity`;

const responsiveCssString = generateCss(({ pseudoClass, getCssByOptions }) => {
  const cssString = getCssByOptions(
    opacity,
    (key, value) => `
      ${pseudoClass(`${prefix}-${key}`)} {
        opacity: ${value};
      }
    `
  );
  return cssString;
});

cssHash(() => responsiveCssString);
