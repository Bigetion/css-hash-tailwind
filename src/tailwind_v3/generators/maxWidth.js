import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}max-w`;

  const { maxWidth = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        maxWidth,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.maxWidth)} {
            max-width: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.maxWidth.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
