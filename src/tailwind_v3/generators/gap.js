import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}gap`;

  const { gap = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gap,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gap)} {
            gap: ${value};
          }
          ${pseudoClass(`${prefix}-x-${key}`, variants.gap)} {
            column-gap: ${value};
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants.gap)} {
            row-gap: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gap.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
