import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}fill`;

  const { fill = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByColors }) => {
      const cssString = getCssByColors(fill, (key, value) => {
        return `
            ${pseudoClass(`${prefix}-${key}`, variants.textColor)} {
              fill: ${value};
            }
          `;
      });
      return cssString;
    },
    configOptions,
    variants.fill.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
