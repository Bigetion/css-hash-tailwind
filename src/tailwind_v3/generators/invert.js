import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}invert`;
  const basePrefix = prefix.replace(globalPrefix, "");

  const { invert = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(invert, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.invert)} {
            --invert: invert(${value}) !important;
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
            variants.invert
          )} {
            --backdrop-invert: invert(${value}) !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.invert.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
