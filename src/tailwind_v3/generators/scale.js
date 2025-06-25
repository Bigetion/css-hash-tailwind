import { generateCssString } from "../utils/index";

export default function generator(configOptions = {}) {
  const {
    prefix: globalPrefix,
    variants = {},
    theme = {},
    vars = {},
  } = configOptions;

  const prefix = `${globalPrefix}scale`;

  const { scale = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        scale,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.scale)} {
            --transform-scale-x: ${value} !important;
            --transform-scale-y: ${value} !important;
            ${vars.transform}
          }
          ${pseudoClass(`${prefix}-x-${key}`, variants.scale)} {
            --transform-scale-x: ${value} !important;
            ${vars.transform}
          }
          ${pseudoClass(`${prefix}-y-${key}`, variants.scale)} {
            --transform-scale-y: ${value} !important;
            ${vars.transform}
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
