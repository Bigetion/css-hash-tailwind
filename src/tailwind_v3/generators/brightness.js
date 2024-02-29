import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}brightness`;
  const basePrefix = prefix.replace(globalPrefix, "");

  const { brightness = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(brightness, (keyTmp, value) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.brightness)} {
            --brightness: brightness(${value}) !important;
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}${key}`,
            variants.brightness
          )} {
            --backdrop-brightness: brightness(${value}) !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.brightness.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
