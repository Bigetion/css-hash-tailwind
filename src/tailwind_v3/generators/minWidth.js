import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}min-w`;

  const { minWidth = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        minWidth,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.minWidth)} {
            min-width: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.minWidth.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
