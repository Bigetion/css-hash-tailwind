import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}outline-opacity`;

  const { outlineOpacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(outlineOpacity, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
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
