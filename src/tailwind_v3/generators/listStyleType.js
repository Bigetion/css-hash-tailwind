import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}list`;

  const { listStyleType = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        listStyleType,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.listStyleType)} {
            list-style-type: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.listStyleType.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
