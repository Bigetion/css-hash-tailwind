import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateOutlineWidth = createSimpleGenerator({
  prefix: "outline",
  property: "outline-width",
  themeKey: "outlineWidth"
});;

export default generateOutlineWidth;
