import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}size`;

  const { spacing = {}, width = {}, height = {} } = theme;

  const propertyOptions = Object.assign({}, spacing, height, width);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.size)} {
            width: ${value};
            height: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.size.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
