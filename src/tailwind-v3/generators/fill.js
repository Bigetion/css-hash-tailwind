const { generateCssString } = require("../utils");

module.exports = function generateStroke(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}fill`;

  const { fill: propertyOptions = {}, colors } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions, getCssByColors }) => {
      const cssString1 = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.fill)} {
            fill: ${value};
          }
        `
      );
      const cssString2 = getCssByColors(colors, (key, value) => {
        return `
            ${pseudoClass(`${prefix}-${key}`, variants.textColor)} {
              fill: ${value};
            }
          `;
      });
      return `${cssString1} ${cssString2}`;
    },
    configOptions,
    variants.fill.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
