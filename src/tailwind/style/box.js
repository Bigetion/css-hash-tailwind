import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix } = configOptions;

const prefix = `${globalPrefix}box`;

const boxSizing = ["border", "content"];

const responsiveCssString = generateCss(({ pseudoClass, getCssByOptions }) => {
  const cssString = getCssByOptions(
    boxSizing,
    (key, value) => `
      ${pseudoClass(`${prefix}-${key}`)} {
        box-sizing: ${value}-box;
      }
    `
  );
  return cssString;
});

cssHash(() => responsiveCssString);
