import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}leading`;

  const { lineHeight: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.lineHeight)} {
            line-height: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.lineHeight.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
