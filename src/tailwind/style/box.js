import { cssHash } from "css-hash";

import { generateCss } from "../utils";
import configOptions from "../config";

const { prefix: globalPrefix } = configOptions;

const prefix = `${globalPrefix}box`;

const boxSizing = ["border", "content"];

const responsiveCssString = generateCss(({ pseudoClass }) => {
  const generateBox = () => {
    let str = "";
    boxSizing.forEach((item) => {
      str += `
        ${pseudoClass(`${prefix}-${item}`)} {
          box-sizing: ${item}-box;
        }
      `;
    });
    return str;
  };

  const cssString = generateBox();
  return cssString;
});

cssHash(() => responsiveCssString);
