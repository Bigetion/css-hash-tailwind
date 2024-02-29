import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}contrast`;
  const basePrefix = prefix.replace(globalPrefix, "");

  const { contrast = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(contrast, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.contrast)} {
            --contrast: contrast(${value}) !important;
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
            variants.contrast
          )} {
            --backdrop-contrast: contrast(${value}) !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.contrast.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
