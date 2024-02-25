import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}outline-opacity`;

  const { opacity = {}, outlineOpacity = {} } = theme;

  const propertyOptions = Object.assign({}, opacity, outlineOpacity);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        const key = keyTmp !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.outlineOpacity)} {
            --outline-opacity: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.outlineOpacity.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
