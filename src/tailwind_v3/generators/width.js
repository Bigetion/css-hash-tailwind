import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}w`;

  const { width = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        width,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.width)} {
            width: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.width.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
