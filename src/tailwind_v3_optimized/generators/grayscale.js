import { createSimpleGenerator } from "../utils/generatorFactory";

const generateGrayscale = createSimpleGenerator({
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

export default generateGrayscale;
