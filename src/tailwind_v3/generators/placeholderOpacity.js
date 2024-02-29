import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}placeholder-opacity`;

  const { placeholderOpacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(placeholderOpacity, (key, value) => {
        const placeholderOpacityString = (placeholderPseudo) => `
          ${pseudoClass(
            (pseudoString) =>
              `${prefix}-${key}${pseudoString}${placeholderPseudo}`,
            variants.placeholderColor
          )} {
            --placeholder-opacity: ${value};
          }
        `;
        return `
          ${placeholderOpacityString("::-webkit-input-placeholder")}
          ${placeholderOpacityString("::-moz-placeholder")}
          ${placeholderOpacityString(":-ms-input-placeholder")}
          ${placeholderOpacityString(":-moz-placeholder")}
        `;
      });
      return cssString;
    },
    configOptions,
    variants.placeholderOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
