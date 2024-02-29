import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}stroke`;

  const { stroke } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(stroke, (key, value) => {
        return `
            ${pseudoClass(`${prefix}-${key}`, variants.textColor)} {
              stroke: ${value};
            }
          `;
      });
      return cssString;
    },
    configOptions,
    variants.stroke.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
