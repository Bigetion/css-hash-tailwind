import { generateCssString } from "../utils/index";

export default function generateBackgroundOrigin(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}bg-origin`;

  const propertyOptions = {
    border: "border-box",
    padding: "padding-box",
    content: "content-box",
  };

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.backgroundOrigin)} {
            -webkit-background-origin: ${value};
            background-origin: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.backgroundOrigin.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
