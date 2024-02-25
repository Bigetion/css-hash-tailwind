import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}saturate`;

  const { saturate: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        const key = keyTmp !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.saturate)} {
            --saturate: saturate(${value}) !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.saturate.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
