import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}row-end`;

  const { gridRowEnd = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridRowEnd,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridRowEnd)} {
            grid-row-end: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gridRowEnd.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
