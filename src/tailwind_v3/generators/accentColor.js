import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}accent`;

  const { colors, accentColor, opacity = {} } = theme;

  const propertyOptions = Object.assign({}, colors, accentColor);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors, getCssByOptions }) => {
      let cssString = getCssByColors(
        propertyOptions,
        (key, value, rgbValue) => {
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `accent-color: rgba(${rgbValue}, var(--accent-opacity));`;
          }
          return `
            ${pseudoClass(`${prefix}-${key}`, variants.accentColor)} {
              --accent-opacity: 1;
              accent-color: ${value};${rgbPropertyValue}
            }
          `;
        }
      );
      cssString += getCssByOptions(
        opacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.accentColor)} {
            --accent-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.accentColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
