import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}blur`;
  const basePrefix = prefix.replace(globalPrefix, "");

  const { blur = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(blur, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.blur)} {
            --blur: blur(${value}) !important;
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
            variants.blur
          )} {
            --backdrop-blur: blur(${value}) !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.blur.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
