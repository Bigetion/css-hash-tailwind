import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}max-h`;

  const { maxHeight = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        maxHeight,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.maxHeight)} {
            max-height: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.maxHeight.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
