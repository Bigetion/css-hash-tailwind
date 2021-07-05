import { generateCssString } from "../utils";

export default function generateFlex(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { flex: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        let prefix = `${globalPrefix}flex`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-flex`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants.flex)} {
            flex: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.flex.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
