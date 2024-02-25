import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}border`;

  const { colors, borderColor } = theme;

  const propertyOptions = Object.assign({}, colors, borderColor);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(
        propertyOptions,
        (keyTmp, value, rgbValue) => {
          if (keyTmp === "default") {
            return "";
          }
          const key = keyTmp !== "default" ? `-${keyTmp}` : "";
          let rgbPropertyValue = "";
          if (rgbValue) {
            rgbPropertyValue = `border-color: rgba(${rgbValue}, var(--border-opacity));`;
          }
          return `
            ${pseudoClass(`${prefix}${key}`, variants.borderColor)} {
              --border-opacity: 1;
              border-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-x${key}`, variants.borderWidth)} {
              --border-opacity: 1;
              border-left-color: ${value};${rgbPropertyValue}
              border-right-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-y${key}`, variants.borderWidth)} {
              --border-opacity: 1;
              border-top-color: ${value};${rgbPropertyValue}
              border-bottom-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-s${key}`, variants.borderWidth)} {
              --border-opacity: 1;
              border-inline-start-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-e${key}`, variants.borderWidth)} {
              --border-opacity: 1;
              border-inline-end-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-t${key}`, variants.borderWidth)} {
              --border-opacity: 1;
              border-top-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-r${key}`, variants.borderWidth)} {
              --border-opacity: 1;
              border-right-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-b${key}`, variants.borderWidth)} {
              --border-opacity: 1;
              border-bottom-color: ${value};${rgbPropertyValue}
            }
            ${pseudoClass(`${prefix}-l${key}`, variants.borderWidth)} {
              --border-opacity: 1;
              border-left-color: ${value};${rgbPropertyValue}
            }
          `;
        }
      );
      return cssString;
    },
    configOptions,
    variants.borderColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
