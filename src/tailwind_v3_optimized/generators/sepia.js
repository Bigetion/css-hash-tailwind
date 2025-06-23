import { createSimpleGenerator } from "../utils/generatorFactory";

const generateSepia = createSimpleGenerator({
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

export default generateSepia;
