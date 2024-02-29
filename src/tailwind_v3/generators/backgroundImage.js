import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {}, theme = {} } = configOptions;

  const prefix = `${globalPrefix}bg`;

  const { backgroundImage = {} } = theme;

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        backgroundImage,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.backgroundImage)} {
            background-image: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.backgroundImage.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
