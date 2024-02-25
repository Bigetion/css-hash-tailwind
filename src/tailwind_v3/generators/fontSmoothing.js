import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const responsiveCssString = generateCssString(
    ({ pseudoClass }) => {
      return `
        ${pseudoClass(`${prefix}antialiased`, variants.fontSmoothing)} {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        ${pseudoClass(
          `${prefix}subpixel-antialiased`,
          variants.fontSmoothing
        )} {
          -webkit-font-smoothing: auto;
          -moz-osx-font-smoothing: auto;
        }
      `;
    },
    configOptions,
    variants.fontSmoothing.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
