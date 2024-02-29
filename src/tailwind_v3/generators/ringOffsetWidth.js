import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}ring-offset`;

  const { ringOffsetWidth = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        ringOffsetWidth,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.ringOffsetWidth)} {
            --ring-offset-width: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.ringOffsetWidth.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
