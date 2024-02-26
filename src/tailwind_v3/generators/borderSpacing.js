import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}border-spacing`;

  const { spacing = {}, borderSpacing = {} } = theme;

  const propertyOptions = Object.assign({}, spacing, borderSpacing);

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        const key = keyTmp !== "default" ? `-${keyTmp}` : "";
        return `
          ${pseudoClass(`${prefix}${key}`, variants.borderSpacing)} {
            border-spacing: ${value};
          }
          ${pseudoClass(`${prefix}-x${key}`, variants.borderSpacing)} {
            border-spacing-x: ${value};
          }
          ${pseudoClass(`${prefix}-y${key}`, variants.borderSpacing)} {
            border-spacing-y: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.borderSpacing.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
