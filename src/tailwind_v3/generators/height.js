import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}h`;

  const { height = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        height,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.height)} {
            height: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.height.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
