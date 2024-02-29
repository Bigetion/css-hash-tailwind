import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}flex`;

  const { flex = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        flex,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.flex)} {
            flex: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.flex.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
