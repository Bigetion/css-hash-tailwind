import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}opacity`;

  const { opacity: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.opacity)} {
            opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.opacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
