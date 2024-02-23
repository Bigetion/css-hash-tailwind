import { generateCssString } from "../utils/index";

export default function generateOutlineColor(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}outline`;

  const { colors, outlineColor } = theme;

  const propertyOptions = Object.assign({}, colors, outlineColor);

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
            rgbPropertyValue = `outline-color: rgba(${rgbValue}, var(--outline-opacity));`;
          }
          return `
            ${pseudoClass(`${prefix}${key}`, variants.outlineColor)} {
              --outline-opacity: 1;
              outline-color: ${value};${rgbPropertyValue}
            }
          `;
        }
      );
      return cssString;
    },
    configOptions,
    variants.outlineColor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
