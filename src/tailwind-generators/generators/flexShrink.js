import { generateCssString } from "../utils";

export default function generateFlexShrink(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { flexShrink: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        let prefix = `${globalPrefix}flex-shrink`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-flex-shrink`;
        }
        return `
          ${pseudoClass(
            key === "default" ? prefix : `${prefix}-${key}`,
            variants.flexShrink
          )} {
            flex-shrink: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.flexShrink.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
