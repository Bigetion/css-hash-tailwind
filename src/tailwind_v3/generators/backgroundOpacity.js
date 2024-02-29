import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}bg-opacity`;

  const { backgroundOpacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        backgroundOpacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.backgroundOpacity)} {
            --bg-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.backgroundOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
