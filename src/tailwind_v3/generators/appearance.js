import { generateCssString } from "../utils/index";

export default function (configOptions = {}) {
  const { prefix, variants = {} } = configOptions;

  const responsiveCssString = generateCssString(
    ({ pseudoClass }) => {
      return `
        ${pseudoClass(`${prefix}appearance-none`, variants.appearance)} {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
      `;
    },
    configOptions,
    variants.appearance.indexOf("responsive") >= 0
  );

  return responsiveCssString;
}
