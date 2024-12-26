import { generateCssString } from "../utils/index";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, theme = {} } = configOptions;

  const prefix = `${globalPrefix}border`;

  const { borderWidth = {} } = theme;

  const responsiveCssString = generateCssString(({ getCssByOptions }) => {
    const cssString = getCssByOptions(borderWidth, (keyTmp, value) => {
      const key = keyTmp.toLowerCase() !== "default" ? `-${keyTmp}` : "";
      return `
          ${prefix}${key} {
            border-width: ${value};
          }
          ${prefix}-x${key} {
            border-top-width: 0;
            border-right-width: ${value};
            border-bottom-width: 0;
            border-left-width: ${value};
          }
          ${prefix}-y${key} {
            border-top-width: ${value};
            border-right-width: 0;
            border-bottom-width: ${value};
            border-left-width: 0;
          }
          ${prefix}-s${key} {
            border-inline-start-width: ${value};
          }
          ${prefix}-e${key} {
            border-inline-end-width: ${value};
          }
          ${prefix}-t${key} {
            border-top-width: ${value};
            border-right-width: 0;
            border-bottom-width: 0;
            border-left-width: 0;
          }
          ${prefix}-r${key} {
            border-top-width: 0;
            border-right-width: ${value};
            border-bottom-width: 0;
            border-left-width: 0;
          }
          ${prefix}-b${key} {
            border-top-width: 0;
            border-right-width: 0;
            border-bottom-width: ${value};
            border-left-width: 0;
          }
          ${prefix}-l${key} {
            border-top-width: 0;
            border-right-width: 0;
            border-bottom-width: 0;
            border-left-width: ${value};
          }
        `;
    });
    return cssString;
  }, configOptions);

  return responsiveCssString;
}
