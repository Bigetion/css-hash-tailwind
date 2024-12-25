import { generateCssString } from "../utils/index";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, theme = {} } = configOptions;

  const prefix = `${globalPrefix}border-spacing`;

  const { borderSpacing = {} } = theme;

  const responsiveCssString = generateCssString(({ getCssByOptions }) => {
    const cssString = getCssByOptions(borderSpacing, (keyTmp, value) => {
      const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
      return `
          ${prefix}${key} {
            border-spacing: ${value};
          }
          ${prefix}-x${key} {
            border-spacing-x: ${value};
          }
          ${prefix}-y${key} {
            border-spacing-y: ${value};
          }
        `;
    });
    return cssString;
  }, configOptions);

  return responsiveCssString;
}
