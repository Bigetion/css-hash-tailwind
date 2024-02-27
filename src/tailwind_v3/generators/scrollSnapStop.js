import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}snap`;

  const propertyOptions = ["normal", "always"];

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.scrollSnapStop)} {
            scroll-snap-stop: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.scrollSnapStop.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
