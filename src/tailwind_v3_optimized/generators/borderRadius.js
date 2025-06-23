import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateBorderRadius = createSimpleGenerator({
  prefix: "rounded",
  property: "border-radius",
  themeKey: "borderRadius"
});;

export default generateBorderRadius;
