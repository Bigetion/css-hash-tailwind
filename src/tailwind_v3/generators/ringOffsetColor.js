import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}ring-offset`;

  const { ringOffsetColor = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        ringOffsetColor,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.ringOffsetColor)} {
            --ring-offset-color: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.ringOffsetColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
