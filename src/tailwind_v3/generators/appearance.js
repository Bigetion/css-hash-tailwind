import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = ["auto", "none"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}appearance-${key}`, variants.appearance)} {
            appearance: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.appearance.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
