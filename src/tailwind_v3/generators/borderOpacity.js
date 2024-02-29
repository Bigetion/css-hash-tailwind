import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}border-opacity`;

  const { borderOpacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        borderOpacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.borderOpacity)} {
            --border-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.borderOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
