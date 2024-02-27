import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = ["auto", "smooth"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}scroll-${key}`, variants.scrollBehavior)} {
            scroll-behavior: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.scrollBehavior.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
