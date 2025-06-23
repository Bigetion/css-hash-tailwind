import { generateCssString } from "../utils/index";

export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}opacity`;
  const basePrefix = prefix.replace(globalPrefix, "");

  const { opacity = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        opacity,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.opacity)} {
            opacity: ${value};
          }
          ${pseudoClass(
            `${prefix.replace(basePrefix, `backdrop-${basePrefix}`)}-${key}`,
            variants.opacity
          )} {
            --backdrop-opacity: opacity(${value});
          }
        `
      );
      return cssString;
    },
    configOptions
  );

  return responsiveCssString;
}
