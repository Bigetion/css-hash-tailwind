import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}fill`;

  const { fill: propertyOptions = {}, colors } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions, getCssByColors }) => {
      let cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.fill)} {
            fill: ${value};
          }
        `
      );
      cssString += getCssByColors(colors, (key, value) => {
        return `
            ${pseudoClass(`${prefix}-${key}`, variants.textColor)} {
              fill: ${value};
            }
          `;
      });
      return cssString;
    },
    configOptions,
    variants.fill.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
