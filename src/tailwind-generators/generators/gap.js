import { generateCssString } from "../utils";

export default function generateGap(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}gap`;

  const { spacing = {}, gap = {} } = theme;

  const propertyOptions = Object.assign(spacing, gap);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gap)} {
            gap: ${value};
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
