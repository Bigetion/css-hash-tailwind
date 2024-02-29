import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}bg`;

  const { backgroundPosition = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        backgroundPosition,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.backgroundPosition)} {
            background-position: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.backgroundPosition.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
