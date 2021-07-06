import { generateCssString } from "../utils";

export default function generateZIndex(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { spacing = {}, gap = {} } = theme;

  const propertyOptions = Object.assign(spacing, gap);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        let prefix = `${globalPrefix}gap`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-gap`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants.gap)} {
            gap: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.gap.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
