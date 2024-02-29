import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}tracking`;

  const { letterSpacing = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        letterSpacing,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.letterSpacing)} {
            letter-spacing: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.letterSpacing.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
