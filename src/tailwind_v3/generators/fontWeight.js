import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}font`;

  const { fontWeight = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        fontWeight,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.fontWeight)} {
            font-weight: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.fontWeight.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
