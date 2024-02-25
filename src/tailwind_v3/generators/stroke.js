import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}stroke`;

  const { stroke: propertyOptions = {}, colors } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions, getCssByColors }) => {
      let cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.stroke)} {
            stroke: ${value};
          }
        `
      );
      cssString += getCssByColors(colors, (key, value) => {
        return `
            ${pseudoClass(`${prefix}-${key}`, variants.textColor)} {
              stroke: ${value};
            }
          `;
      });
      return cssString;
    },
    configOptions,
    variants.stroke.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
