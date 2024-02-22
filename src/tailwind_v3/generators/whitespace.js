import { generateCssString } from "../utils/index";

export default function generateWhitespace(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}whitespace`;

  const propertyOptions = [
    "normal",
    "nowrap",
    "nowrap",
    "pre",
    "pre-line",
    "pre-wrap",
    "break-spaces",
  ];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.whitespace)} {
            white-space: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.whitespace.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
