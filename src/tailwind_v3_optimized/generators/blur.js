import { createSimpleGenerator } from "../utils/generatorFactory";

const generateBlur = createSimpleGenerator({
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

export default generateBlur;
