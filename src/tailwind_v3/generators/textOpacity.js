import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}text-opacity`;

  const { textOpacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        textOpacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.textOpacity)} {
            --text-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
