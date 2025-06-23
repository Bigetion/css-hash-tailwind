import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateOutlineStyle = createSimpleGenerator({
  prefix: "outline",
  property: "outline-style",
  themeKey: "outlineStyle"
});;

export default generateOutlineStyle;
