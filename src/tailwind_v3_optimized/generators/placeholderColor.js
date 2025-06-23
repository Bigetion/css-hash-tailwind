import { createColorGenerator } from "../utils/generatorFactory";

const generatePlaceholderColor = createColorGenerator({
  prefix: "placeholder",
  property: "color",
  themeKey: "placeholderColor",
  supportsOpacity: true,
  opacityVar: "--placeholder-opacity",
  customHandler: ({ key, value, rgbValue, prefix, variants, pseudoClass, opacityVar }) => {
    if (rgbValue) {
      return `
        ${pseudoClass(`${prefix}-${key}`, variants)} ::placeholder {
          ${opacityVar}: 1;
          color: rgba(${rgbValue}, var(${opacityVar}));
        }
      `;
    }
    return `
      ${pseudoClass(`${prefix}-${key}`, variants)} ::placeholder {
        color: ${value};
      }
    `;
  }
});;

export default generatePlaceholderColor;
