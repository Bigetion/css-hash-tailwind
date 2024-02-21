import { generateCssString } from "../utils/index";

export default function generateTextDecorationColor(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}decoration`;

  const { colors, textColor, opacity } = theme;

  const propertyOptions = Object.assign({}, colors, textColor);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors, getCssByOptions }) => {
      const cssString = getCssByColors(
        propertyOptions,
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
      const cssStringOpacity = getCssByOptions(
        opacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-opacity-${key}`, variants.opacity)} {
            --text-decoration-opacity: ${value};
          }
        `
      );
      return `${cssString} ${cssStringOpacity}`;
    },
    configOptions,
    variants.textDecorationColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
