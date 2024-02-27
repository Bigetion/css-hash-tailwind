import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const { spacing = {}, padding = {} } = theme;

  const propertyOptions = Object.assign({}, spacing, padding);
  Object.entries(spacing).forEach(([key, value]) => {
    propertyOptions[`-${key}`] = `-${value}`.replace("--", "-");
  });

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(propertyOptions, (keyTmp, value) => {
        let prefix = `${globalPrefix}scroll-p`;
        let key = keyTmp;
        if (`${key}`.indexOf("-") >= 0) {
          key = key.split("-").join("");
          prefix = `${globalPrefix}-p`;
        }
        return `
          ${pseudoClass(`${prefix}-${key}`, variants.scrollPadding)} {
            scroll-padding: ${value};
          }
          ${pseudoClass(`${prefix}y-${key}`, variants.scrollPadding)} {
            scroll-padding-top: ${value};
            scroll-padding-bottom: ${value};
          }
          ${pseudoClass(`${prefix}x-${key}`, variants.scrollPadding)} {
            scroll-padding-left: ${value};
            scroll-padding-right: ${value};
          }
          ${pseudoClass(`${prefix}t-${key}`, variants.scrollPadding)} {
            scroll-padding-top: ${value};
          }
          ${pseudoClass(`${prefix}r-${key}`, variants.scrollPadding)} {
            scroll-padding-right: ${value};
          }
          ${pseudoClass(`${prefix}b-${key}`, variants.scrollPadding)} {
            scroll-padding-bottom: ${value};
          }
          ${pseudoClass(`${prefix}l-${key}`, variants.scrollPadding)} {
            scroll-padding-left: ${value};
          }
          ${pseudoClass(`${prefix}s-${key}`, variants.scrollPadding)} {
            scroll-padding-inline-start: ${value};
          }
          ${pseudoClass(`${prefix}e-${key}`, variants.scrollPadding)} {
            scroll-padding-inline-end: ${value};
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
