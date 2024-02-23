import { generateCssString } from "../utils/index";

export default function generateTextDecoration(configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = ["wrap", "nowrap", "balance", "pretty"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}text-${key}`, variants.textDecoration)} {
            text-wrap: ${value};
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