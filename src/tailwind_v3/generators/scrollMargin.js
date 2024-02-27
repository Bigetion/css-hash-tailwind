import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { spacing = {}, margin = {} } = theme;

  const propertyOptions = Object.assign({}, spacing, margin);
  Object.entries(spacing).forEach(([key, value]) => {
    propertyOptions[`-${key}`] = `-${value}`.replace("--", "-");
  });

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        let prefix = `${globalPrefix}scroll-m`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-scroll-m`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants.scrollPadding)} {
            scroll-margin: ${value};
          }
          ${pseudoClass(`${prefix}y-${key}`, variants.scrollPadding)} {
            scroll-margin-top: ${value};
            scroll-margin-bottom: ${value};
          }
          ${pseudoClass(`${prefix}x-${key}`, variants.scrollPadding)} {
            scroll-margin-left: ${value};
            scroll-margin-right: ${value};
          }
          ${pseudoClass(`${prefix}t-${key}`, variants.scrollPadding)} {
            scroll-margin-top: ${value};
          }
          ${pseudoClass(`${prefix}r-${key}`, variants.scrollPadding)} {
            scroll-margin-right: ${value};
          }
          ${pseudoClass(`${prefix}b-${key}`, variants.scrollPadding)} {
            scroll-margin-bottom: ${value};
          }
          ${pseudoClass(`${prefix}l-${key}`, variants.scrollPadding)} {
            scroll-margin-left: ${value};
          }
          ${pseudoClass(`${prefix}s-${key}`, variants.scrollPadding)} {
            scroll-margin-inline-start: ${value};
          }
          ${pseudoClass(`${prefix}e-${key}`, variants.scrollPadding)} {
            scroll-margin-inline-end: ${value};
          }
        `;
      });
      return cssString;
    },
    configOptions,
    variants.scrollPadding.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
