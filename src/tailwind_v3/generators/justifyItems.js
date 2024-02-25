import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}justify-items`;

  const propertyOptions = ["auto", "start", "end", "center", "stretch"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.justifyItems)} {
            justify-items: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.justifyItems.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
