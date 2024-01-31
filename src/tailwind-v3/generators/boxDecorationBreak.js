const { generateCssString } = require("../utils");

module.exports = function generateBoxDecorationBreak(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}box-decoration`;

  const propertyOptions = ["slice", "clone"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.boxDecorationBreak)} {
            box-decoration-break: ${value};
            -webkit-box-decoration-break: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.boxDecorationBreak.indexOf("responsive") >= 0
  );

  return responsiveCssString;
};
