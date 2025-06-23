import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateBorderSpacing = createVariantGenerator({
  prefix: "border-spacing",
  variants: {
    'default': 'border-spacing',
    'x': 'border-spacing-x',
    'y': 'border-spacing-y'
  },
  themeKey: "borderSpacing"
});;

export default generateBorderSpacing;
