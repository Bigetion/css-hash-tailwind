import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}grow`;

  const { flexGrow: propertyOptions = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(
            key === "default" ? prefix : `${prefix}-${key}`,
            variants.flexGrow
          )} {
            flex-grow: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.flexGrow.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
