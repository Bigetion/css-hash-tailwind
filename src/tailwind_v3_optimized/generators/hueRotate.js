import { createSimpleGenerator } from "../utils/generatorFactory";

const generateHueRotate = createSimpleGenerator({
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

export default generateHueRotate;
