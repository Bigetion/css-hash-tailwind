import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}divide`;

  const { divideColor = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(divideColor, (key, value, rgbValue) => {
        let rgbPropertyValue = "";
        if (rgbValue) {
          rgbPropertyValue = `border-color: rgba(${rgbValue}, var(--divide-opacity));`;
        }
        return `
            ${pseudoClass(
              (pseudoString) =>
                `${prefix}-${key}${pseudoString} > :not([hidden]) ~ :not([hidden])`,
              variants.divideColor
            )} {
              --divide-opacity: 1;
              border-color: ${value};${rgbPropertyValue}
            }
          `;
      });
      return cssString;
    },
    configOptions,
    variants.divideColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
