import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}grayscale`;
  const basePrefix = prefix.replace(globalPrefix, "");

  const { grayscale = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(grayscale, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.grayscale)} {
            --grayscale: grayscale(${value}) !important;
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
            variants.grayscale
          )} {
            --backdrop-grayscale: grayscale(${value}) !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.grayscale.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
