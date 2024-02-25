import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}`;

  const propertyOptions = {
    isolate: "isolate",
    "isolation-auto": "no-repeat",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}${key}`, variants.isolation)} {
            isolation: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.isolation.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
