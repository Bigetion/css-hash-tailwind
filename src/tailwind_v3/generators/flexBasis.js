import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}basis`;

  const { spacing = {}, width = {}, flexBasis = {} } = theme;

  const propertyOptions = Object.assign({}, spacing, width, flexBasis);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.flexBasis)} {
            flex-basis: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.flexBasis.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
