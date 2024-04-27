import { generateCssString } from "../utils/index";

export default function generator(configOptions = {}) {
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
    configOptions
  );

  return responsiveCssString;
}
