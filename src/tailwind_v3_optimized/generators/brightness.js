import { createSimpleGenerator } from "../utils/generatorFactory";

const generateBrightness = createSimpleGenerator({
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

export default generateBrightness;
