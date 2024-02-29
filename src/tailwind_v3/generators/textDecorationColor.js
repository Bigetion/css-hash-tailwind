import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}decoration`;

  const { textDecorationColor = {}, opacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors, getCssByOptions }) => {
      let cssString = getCssByColors(
        textDecorationColor,
        (key, value, rgbValue) => {
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `text-decoration-color: rgba(${rgbValue}, var(--text-decoration-opacity));`;
          }
          return `
            ${pseudoClass(`${prefix}-${key}`, variants.textDecorationColor)} {
              --text-decoration-opacity: 1;
              text-decoration-color: ${value};${rgbPropertyValue}
            }
          `;
        }
      );
      cssString += getCssByOptions(
        opacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-opacity-${key}`, variants.opacity)} {
            --text-decoration-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textDecorationColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
