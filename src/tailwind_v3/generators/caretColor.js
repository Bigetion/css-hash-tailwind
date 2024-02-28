import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}caret`;

  const { colors, caretColor, opacity = {} } = theme;

  const propertyOptions = Object.assign({}, colors, caretColor);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors, getCssByOptions }) => {
      let cssString = getCssByColors(
        propertyOptions,
        (key, value, rgbValue) => {
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `caret-color: rgba(${rgbValue}, var(--caret-opacity));`;
          }
          return `
            ${pseudoClass(`${prefix}-${key}`, variants.caretColor)} {
              --caret-opacity: 1;
              caret-color: ${value};${rgbPropertyValue}
            }
          `;
        }
      );
      cssString += getCssByOptions(
        opacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.caretColor)} {
            --caret-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.caretColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
