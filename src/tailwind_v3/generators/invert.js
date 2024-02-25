import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}invert`;

  const propertyOptions = [0, 100];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        const key = keyTmp !== "100" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.invert)} {
            --invert: invert(${value}) !important;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.invert.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
