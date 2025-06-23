import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateRingWidth = createSimpleGenerator({
  prefix: "ring",
  property: "--ring-width",
  themeKey: "ringWidth",
  customHandler: ({ key, value, prefix, variants, pseudoClass }) => {
    if (key === "0") {
      return `
        ${pseudoClass(`${prefix}-${key}`, variants)} {
          --ring-width: 0px;
          --ring-offset-shadow: var(--ring-inset) 0 0 0 var(--ring-offset-width) var(--ring-offset-color);
          --ring-shadow: var(--ring-inset) 0 0 0 calc(var(--ring-width) + var(--ring-offset-width)) var(--ring-color);
          box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--shadow, 0 0 #0000);
        }
      `;
    }
    
    return `
      ${pseudoClass(`${prefix}-${key}`, variants)} {
        --ring-width: ${value};
        --ring-offset-shadow: var(--ring-inset) 0 0 0 var(--ring-offset-width) var(--ring-offset-color);
        --ring-shadow: var(--ring-inset) 0 0 0 calc(var(--ring-width) + var(--ring-offset-width)) var(--ring-color);
        box-shadow: var(--ring-offset-shadow), var(--ring-shadow), var(--shadow, 0 0 #0000);
      }
    `;
  }
});;

export default generateRingWidth;
