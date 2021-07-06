import { generateCssString } from "../utils";

export default function generatePlaceholderOpacity(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}placeholder-opacity`;

  const { opacity = {}, placeholderOpacity = {} } = theme;

  const propertyOptions = Object.assign(opacity, placeholderOpacity);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.placeholderOpacity)} {
            --placeholder-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.placeholderOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
