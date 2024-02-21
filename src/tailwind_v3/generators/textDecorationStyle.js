import { generateCssString } from "../utils/index";

export default function generateTextDecorationStyle(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  const prefix = `${globalPrefix}decoration`;

  const propertyOptions = [
    "solid",
    "double",
    "dotted",
    "dashed",
    "wavy",
  ].reduce((c, o) => {
    c[o] = o;
    return c;
  }, {});

  const responsiveCssString = generateCssString(
    ({ pseudoClass, getCssByOptions }) => {
      const cssString = getCssByOptions(
        propertyOptions,
        (key, value) => `
          ${pseudoClass(`${prefix}-${key}`, variants.textDecorationStyle)} {
            text-decoration-style: ${value};
          }
        `
      );
      return cssString;
    },
    configOptions,
    variants.textDecorationStyle.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
