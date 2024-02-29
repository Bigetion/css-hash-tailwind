import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  let prefix = `${globalPrefix}row-start`;

  const { gridRowStart = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        gridRowStart,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.gridRowStart)} {
            grid-row-start: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.gridRowStart.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
