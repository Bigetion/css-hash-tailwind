import { createColorGenerator } from "../../utils/generatorFactory";

// Color generators
export const generateTextColor = createColorGenerator({
  prefix: "text",
  property: "color",
  themeKey: "textColor",
  supportsOpacity: true,
  opacityVar: "--text-opacity"
});

export const generateBackgroundColor = createColorGenerator({
  prefix: "bg",
  property: "background-color",
  themeKey: "backgroundColor",
  supportsOpacity: true,
  opacityVar: "--bg-opacity"
});

export const generateBorderColor = createColorGenerator({
  prefix: "border",
  property: "border-color",
  themeKey: "borderColor",
  supportsOpacity: true,
  opacityVar: "--border-opacity"
});

export const generatePlaceholderColor = createColorGenerator({
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
});

export const generateAccentColor = createColorGenerator({
  prefix: "accent",
  property: "accent-color",
  themeKey: "accentColor"
});

export const generateCaretColor = createColorGenerator({
  prefix: "caret",
  property: "caret-color",
  themeKey: "caretColor"
});

export const generateFill = createColorGenerator({
  prefix: "fill",
  property: "fill",
  themeKey: "fill"
});

export const generateStroke = createColorGenerator({
  prefix: "stroke",
  property: "stroke",
  themeKey: "stroke"
});

export const generateOutlineColor = createColorGenerator({
  prefix: "outline",
  property: "outline-color",
  themeKey: "outlineColor",
  supportsOpacity: true,
  opacityVar: "--outline-opacity"
});

export const generateRingColor = createColorGenerator({
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
});

export const generateRingOffsetColor = createColorGenerator({
  prefix: "ring-offset",
  property: "--ring-offset-color",
  themeKey: "ringOffsetColor"
});

export const generateDivideColor = createColorGenerator({
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
});

export const generateTextDecorationColor = createColorGenerator({
  prefix: "decoration",
  property: "text-decoration-color",
  themeKey: "textDecorationColor",
  supportsOpacity: true,
  opacityVar: "--text-decoration-opacity"
});
