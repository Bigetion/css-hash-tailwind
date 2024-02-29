import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}min-h`;

  const { minHeight = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        minHeight,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.minHeight)} {
            min-height: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.minHeight.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
