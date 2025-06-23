import { createColorGenerator } from "../utils/generatorFactory";

const generateRingColor = createColorGenerator({
  prefix: "ring",
  property: "--ring-color",
  themeKey: "ringColor",
  supportsOpacity: true,
  opacityVar: "--ring-opacity",
  customHandler: ({ key, value, rgbValue, prefix, variants, pseudoClass, opacityVar }) => {
    if (rgbValue) {
      return `
        ${pseudoClass(`${prefix}-${key}`, variants)} {
          ${opacityVar}: 1;
          --ring-color: rgba(${rgbValue}, var(${opacityVar}));
          box-shadow: var(--ring-inset) 0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-inset) 0 0 0 calc(var(--ring-width) + var(--ring-offset-width)) var(--ring-color);
        }
      `;
    }
    return null;
  }
});;

export default generateRingColor;
