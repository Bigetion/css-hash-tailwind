import { createSimpleGenerator } from "../utils/generatorFactory";

const generateInvert = createSimpleGenerator({
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

export default generateInvert;
