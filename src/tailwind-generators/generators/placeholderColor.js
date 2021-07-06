import { generateCssString } from "../utils";

export default function generatePlaceholderColor(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}placeholder`;

  const { colors, placeholderColor } = theme;

  const propertyOptions = Object.assign(colors, placeholderColor);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        propertyOptions,
        (key, value, rgbValue) => {
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `color: rgba(${rgbValue}, var(--placeholder-opacity));`;
          }
          const propertyValue = `--placeholder-opacity: 1; color: ${value}; ${rgbPropertyValue}`;
          const placeholderString = (placeholderPseudo) => `
            ${pseudoClass(
              (pseudoString) =>
                `${prefix}-${key}${pseudoString}${placeholderPseudo}`,
              variants.placeholderColor
            )} {
              ${propertyValue}
            }
          `;
          return `
            ${placeholderString("::-webkit-input-placeholder")}
            ${placeholderString("::-moz-placeholder")}
            ${placeholderString(":-ms-input-placeholder")}
            ${placeholderString(":-moz-placeholder")}
          `;
        }
      );
      return cssString;
    },
    configOptions,
    variants.placeholderColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
