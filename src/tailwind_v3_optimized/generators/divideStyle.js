import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateDivideStyle = createSimpleGenerator({
  prefix: "divide",
  property: "border-style",
  themeKey: "divideStyle",
  customHandler: ({ key, value, prefix, variants, pseudoClass }) => {
    return `
      ${pseudoClass(`${prefix}-${key}`, variants)} > :not([hidden]) ~ :not([hidden]) {
        border-style: ${value};
      }
    `;
  }
});;

export default generateDivideStyle;
