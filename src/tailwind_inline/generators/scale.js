import { generateCssString } from "../utils/index";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, theme = {} } = configOptions;

  const prefix = `${globalPrefix}scale`;

  const { scale = {} } = theme;

  const responsiveCssString = generateCssString(({ getCssByOptions }) => {
    const cssString = getCssByOptions(
      scale,
      (key, value) => `
          ${prefix}-${key} {
            --transform-scale-x: ${value} !important;
            --transform-scale-y: ${value} !important;
          }
          ${prefix}-x-${key} {
            --transform-scale-x: ${value} !important;
          }
          ${prefix}-y-${key} {
            --transform-scale-y: ${value} !important;
          }
        `
    );
    return cssString;
  }, configOptions);

  return responsiveCssString;
}
