import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateBorderWidth = createSimpleGenerator({
  prefix: "border",
  property: "border-width",
  themeKey: "borderWidth"
});;

export default generateBorderWidth;
