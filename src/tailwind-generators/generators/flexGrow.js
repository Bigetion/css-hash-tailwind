import { generateCssString } from "../utils";

export default function generateFlexGrow(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { flexGrow: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        let prefix = `${globalPrefix}flex-grow`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-flex-grow`;
        }
        return `
          ${pseudoClass(
            key === "default" ? prefix : `${prefix}-${key}`,
            variants.flexGrow
          )} {
            flex-grow: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.flexGrow.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
