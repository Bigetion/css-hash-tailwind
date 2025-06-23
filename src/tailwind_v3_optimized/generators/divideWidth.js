import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateDivideWidth = createSimpleGenerator({
  prefix: "divide",
  property: "border-width",
  themeKey: "divideWidth",
  customHandler: ({ key, value, prefix, variants, pseudoClass }) => {
    // Special handling for divide width
    return `
      ${pseudoClass(`${prefix}-${key}`, variants)} > :not([hidden]) ~ :not([hidden]) {
        --tw-divide-y-reverse: 0;
        border-top-width: calc(${value} * calc(1 - var(--tw-divide-y-reverse)));
        border-bottom-width: calc(${value} * var(--tw-divide-y-reverse));
      }
    `;
  }
});;

export default generateDivideWidth;
