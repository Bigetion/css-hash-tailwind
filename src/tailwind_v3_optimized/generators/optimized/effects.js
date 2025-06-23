import { createSimpleGenerator } from "../../utils/generatorFactory";

// Effects generators
export const generateBoxShadow = createSimpleGenerator({
  prefix: "shadow",
  property: "box-shadow",
  themeKey: "boxShadow"
});

export const generateBoxShadowColor = createSimpleGenerator({
  prefix: "shadow",
  property: "--shadow-color",
  themeKey: "boxShadowColor",
  valueFormatter: (value) => {
    if (value.startsWith('#')) {
      const rgbValue = hexToRgb(value);
      return `rgb(${rgbValue})`;
    }
    return value;
  }
});

export const generateOpacity = createSimpleGenerator({
  prefix: "opacity",
  property: "opacity",
  themeKey: "opacity"
});

export const generateMixBlendMode = createSimpleGenerator({
  prefix: "mix-blend",
  property: "mix-blend-mode",
  themeKey: "mixBlendMode"
});

export const generateBackgroundBlendMode = createSimpleGenerator({
  prefix: "bg-blend",
  property: "background-blend-mode",
  themeKey: "backgroundBlendMode"
});

// Filter effects
export const generateBlur = createSimpleGenerator({
  prefix: "blur",
  property: "--tw-blur",
  themeKey: "blur",
  customHandler: ({ key, value, prefix, variants, pseudoClass }) => {
    return `
      ${pseudoClass(`${prefix}-${key}`, variants)} {
        --tw-blur: blur(${value});
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
      }
    `;
  }
});

export const generateBrightness = createSimpleGenerator({
  prefix: "brightness",
  property: "--tw-brightness",
  themeKey: "brightness",
  customHandler: ({ key, value, prefix, variants, pseudoClass }) => {
    return `
      ${pseudoClass(`${prefix}-${key}`, variants)} {
        --tw-brightness: brightness(${value});
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
      }
    `;
  }
});

export const generateContrast = createSimpleGenerator({
  prefix: "contrast",
  property: "--tw-contrast",
  themeKey: "contrast",
  customHandler: ({ key, value, prefix, variants, pseudoClass }) => {
    return `
      ${pseudoClass(`${prefix}-${key}`, variants)} {
        --tw-contrast: contrast(${value});
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
      }
    `;
  }
});

export const generateGrayscale = createSimpleGenerator({
  prefix: "grayscale",
  property: "--tw-grayscale",
  themeKey: "grayscale",
  customHandler: ({ key, value, prefix, variants, pseudoClass }) => {
    return `
      ${pseudoClass(`${prefix}-${key}`, variants)} {
        --tw-grayscale: grayscale(${value});
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
      }
    `;
  }
});

export const generateHueRotate = createSimpleGenerator({
  prefix: "hue-rotate",
  property: "--tw-hue-rotate",
  themeKey: "hueRotate",
  customHandler: ({ key, value, prefix, variants, pseudoClass }) => {
    return `
      ${pseudoClass(`${prefix}-${key}`, variants)} {
        --tw-hue-rotate: hue-rotate(${value});
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
      }
    `;
  }
});

export const generateInvert = createSimpleGenerator({
  prefix: "invert",
  property: "--tw-invert",
  themeKey: "invert",
  customHandler: ({ key, value, prefix, variants, pseudoClass }) => {
    return `
      ${pseudoClass(`${prefix}-${key}`, variants)} {
        --tw-invert: invert(${value});
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
      }
    `;
  }
});

export const generateSaturate = createSimpleGenerator({
  prefix: "saturate",
  property: "--tw-saturate",
  themeKey: "saturate",
  customHandler: ({ key, value, prefix, variants, pseudoClass }) => {
    return `
      ${pseudoClass(`${prefix}-${key}`, variants)} {
        --tw-saturate: saturate(${value});
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
      }
    `;
  }
});

export const generateSepia = createSimpleGenerator({
  prefix: "sepia",
  property: "--tw-sepia",
  themeKey: "sepia",
  customHandler: ({ key, value, prefix, variants, pseudoClass }) => {
    return `
      ${pseudoClass(`${prefix}-${key}`, variants)} {
        --tw-sepia: sepia(${value});
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
      }
    `;
  }
});

export const generateDropShadow = createSimpleGenerator({
  prefix: "drop-shadow",
  property: "--tw-drop-shadow",
  themeKey: "dropShadow",
  customHandler: ({ key, value, prefix, variants, pseudoClass }) => {
    let shadowValue = value;
    if (Array.isArray(value)) {
      shadowValue = value.map(v => `drop-shadow(${v})`).join(' ');
    } else {
      shadowValue = `drop-shadow(${value})`;
    }
    
    return `
      ${pseudoClass(`${prefix}-${key}`, variants)} {
        --tw-drop-shadow: ${shadowValue};
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
      }
    `;
  }
});

// Helper function
function hexToRgb(hex) {
  const rgba = hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (...args) =>
        "#" + args[1] + args[1] + args[2] + args[2] + args[3] + args[3]
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16))
    .join(",");

  if (rgba.indexOf("NaN") >= 0) return "";
  return rgba;
}
