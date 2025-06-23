import { createSimpleGenerator } from "../utils/generatorFactory";

const generateContrast = createSimpleGenerator({
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

export default generateContrast;
