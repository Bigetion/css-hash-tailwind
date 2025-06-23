import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateBorderStyle = createSimpleGenerator({
  prefix: "border",
  property: "border-style",
  themeKey: "borderStyle"
});;

export default generateBorderStyle;
