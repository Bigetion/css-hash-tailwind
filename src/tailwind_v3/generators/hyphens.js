import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}hyphens`;

  const propertyOptions = ["none", "manual", "auto"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.hyphens)} {
            -webkit-hyphens: ${value};
            hyphens: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.hyphens.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
