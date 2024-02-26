import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}origin`;

  const propertyOptions = [
    "center",
    "top",
    "top-right",
    "right",
    "bottom-right",
    "bottom",
    "bottom-left",
    "left",
    "top-left",
  ];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.transformOrigin)} {
            transform-origin: ${value.replace("-", " ")} !important;
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.transformOrigin.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
