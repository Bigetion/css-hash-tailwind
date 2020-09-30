import { cssHash } from "css-hash";

import { generateCssWithOptions } from "../utils";
import defaultConfigOptions from "../config";

export default function generateBox(globalConfigOptions = {}) {
  const configOptions = Object.assign(
    {},
    defaultConfigOptions,
    globalConfigOptions
  );
  const { prefix: globalPrefix } = configOptions;

  const prefix = `${globalPrefix}box`;

  const boxSizing = ["border", "content"];

  const responsiveCssString = generateCssWithOptions(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        boxSizing,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`)} {
            box-sizing: ${value}-box;
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  cssHash(() => responsiveCssString);
}
