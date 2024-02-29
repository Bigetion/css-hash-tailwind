import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}auto-cols`;

  const { gridAutoColumns = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridAutoColumns,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridAutoColumns)} {
            grid-auto-columns: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gridAutoColumns.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
