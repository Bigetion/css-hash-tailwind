import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { hueRotate: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        let prefix = `${globalPrefix}hue-rotate`;
        const basePrefix = prefix.replace(globalPrefix, "");
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-hue-rotate`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants.hueRotate)} {
            --hue-rotate: hue-rotate(${value}) !important;
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}-${key}`,
            variants.hueRotate
          )} {
            --backdrop-hue-rotate: hue-rotate(${value}) !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.hueRotate.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
