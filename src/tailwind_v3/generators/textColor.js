import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}text`;

  const { textColor } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(textColor, (key, value, rgbValue) => {
        let rgbPropertyValue = "";
        if (rgbValue) {
          rgbPropertyValue = `color: rgba(${rgbValue}, var(--text-opacity));`;
        }
        return `
            ${pseudoClass(`${prefix}-${key}`, variants.textColor)} {
              --text-opacity: 1;
              color: ${value};${rgbPropertyValue}
            }
          `;
      });
      return cssString;
    },
    configOptions,
    variants.textColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
