import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}outline-offset`;

  const { outlineOffset = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(outlineOffset, (key, value) => {
        return `
          ${pseudoClass(`${prefix}-${key}`, variants.outlineOffset)} {
            outline-offset: ${value}px;
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.outlineOffset.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
