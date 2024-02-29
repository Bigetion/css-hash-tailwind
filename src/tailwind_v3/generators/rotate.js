import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { rotate = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(rotate, (keyTmp, value) => {
        let prefix = `${globalPrefix}rotate`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-rotate`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants.rotate)} {
            --transform-rotate: ${value} !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.rotate.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
