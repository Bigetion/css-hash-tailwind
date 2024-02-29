import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}auto-rows`;

  const { gridAutoRows = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridAutoRows,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridAutoRows)} {
            grid-auto-rows: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gridAutoRows.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
