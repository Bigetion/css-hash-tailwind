import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}cursor`;

  const propertyOptions = [
    "auto",
    "default",
    "pointer",
    "wait",
    "text",
    "move",
    "not-allowed",
  ];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.cursor)} {
            cursor: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.cursor.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
