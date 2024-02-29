import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}divide-opacity`;

  const { divideOpacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        divideOpacity,
        (key, value) => `
          ${pseudoClass(
            (pseudoString) =>
              `${prefix}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
            variants.divideOpacity
          )} {
            --divide-opacity: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.divideOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
