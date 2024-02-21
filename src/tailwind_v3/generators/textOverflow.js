import { generateCssString } from "../utils/index";

export default function generateTextDecoration(configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const propertyOptions = {
    ellipsis: "ellipsis",
    clip: "clip",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}text-${key}`, variants.textDecoration)} {
            text-overflow: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textDecoration.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
