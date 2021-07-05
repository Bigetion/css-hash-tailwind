import { generateCssString } from "../utils";

export default function generateOrder(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { order: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        let prefix = `${globalPrefix}order`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-order`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants.order)} {
            order: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.order.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
