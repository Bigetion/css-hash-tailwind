import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}stroke`;

  const { strokeWidth = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        strokeWidth,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.strokeWidth)} {
            stroke-width: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.strokeWidth.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
