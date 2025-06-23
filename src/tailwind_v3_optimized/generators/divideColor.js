import { createColorGenerator } from "../utils/generatorFactory";

const generateDivideColor = createColorGenerator({
  prefix: "divide",
  property: "border-color",
  themeKey: "divideColor",
  supportsOpacity: true,
  opacityVar: "--divide-opacity",
  customHandler: ({ key, value, rgbValue, prefix, variants, pseudoClass }) => {
    if (rgbValue) {
      return `
        ${pseudoClass(`${prefix}-${key}`, variants)} > :not([hidden]) ~ :not([hidden]) {
          --divide-opacity: 1;
          border-color: rgba(${rgbValue}, var(--divide-opacity));
        }
      `;
    }
    return `
      ${pseudoClass(`${prefix}-${key}`, variants)} > :not([hidden]) ~ :not([hidden]) {
        border-color: ${value};
      }
    `;
  }
});;

export default generateDivideColor;
