import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = {
    visible: "visible",
    collapse: "collapse",
    invisible: "hidden",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}${key}`, variants.visibility)} {
            visibility: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.visibility.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
