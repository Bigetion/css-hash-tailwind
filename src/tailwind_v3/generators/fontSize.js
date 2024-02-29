import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}text`;

  const { fontSize = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        fontSize,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.fontSize)} {
            font-size: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.fontSize.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
