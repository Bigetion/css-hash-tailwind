import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}outline`;

  const { outlineWidth: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (key, value) => {
        return `
          ${pseudoClass(`${prefix}-${key}`, variants.outlineWidth)} {
            outline-width: ${value}px;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.outlineWidth.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
