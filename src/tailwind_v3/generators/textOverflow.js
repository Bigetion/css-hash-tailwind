import { generateCssString } from "../utils/index";

export default function generateTextDecoration(configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = ["ellipsis", "clip"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}truncate`, variants.wordBreak)} {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          ${pseudoClass(`${prefix}text-${key}`, variants.textDecoration)} {
            text-overflow: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textDecoration.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
