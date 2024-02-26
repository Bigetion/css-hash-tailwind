import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}caption`;

  const propertyOptions = ["top", "bottom"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.captionSide)} {
            caption-side: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.captionSide.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
