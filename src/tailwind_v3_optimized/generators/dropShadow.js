import { createSimpleGenerator } from "../utils/generatorFactory";

const generateDropShadow = createSimpleGenerator({
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
    `;  }
});

export default generateDropShadow;
