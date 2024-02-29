import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}ring`;

  const { ringColor = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(ringColor, (keyTmp, value, rgbValue) => {
        const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
        let rgbPropertyValue = "";
        if (rgbValue) {
          rgbPropertyValue = `--ring-color: rgba(${rgbValue}, var(--ring-opacity));`;
        }
        return `
            ${pseudoClass(`${prefix}${key}`, variants.ringColor)} {
              --ring-opacity: 1;
              --ring-color: ${value};${rgbPropertyValue}
            }
          `;
      });
      return cssString;
    },
    configOptions,
    variants.ringColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
