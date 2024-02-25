import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}decoration`;

  const { textDecorationThickness } = theme;

  const propertyOptions = Object.assign({}, textDecorationThickness);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.textDecorationThickness)} {
            text-decoration-thickness: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textDecorationThickness.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
