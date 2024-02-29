import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}col-end`;

  const { gridColumnEnd = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridColumnEnd,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridColumnEnd)} {
            grid-column-end: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gridColumnEnd.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
