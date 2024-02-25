import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}brightness`;

  const { brightness: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        const key = keyTmp !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.brightness)} {
            --brightness: brightness(${value}) !important;
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
