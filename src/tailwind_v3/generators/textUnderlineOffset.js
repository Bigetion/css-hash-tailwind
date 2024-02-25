import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}underline-offset`;

  const { textUnderlineOffset } = theme;

  const propertyOptions = Object.assign({}, textUnderlineOffset);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.textUnderlineOffset)} {
            text-underline-offset: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textUnderlineOffset.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
