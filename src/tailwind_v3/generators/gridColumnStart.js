import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}col-start`;

  const { gridColumnStart = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridColumnStart,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridColumnStart)} {
            grid-column-start: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gridColumnStart.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
