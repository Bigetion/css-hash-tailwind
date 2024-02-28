import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}touch`;

  const propertyOptions = [
    "auto",
    "none",
    "pan-x",
    "pan-left",
    "pan-right",
    "pan-y",
    "pan-up",
    "pan-down",
    "pinch-zoom",
    "manipulation",
  ];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.touchAction)} {
            touch-action: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.touchAction.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
