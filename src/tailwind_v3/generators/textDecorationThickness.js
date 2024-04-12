import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}decoration`;

  const { textDecorationThickness = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        textDecorationThickness,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.textDecorationThickness)} {
            text-decoration-thickness: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
