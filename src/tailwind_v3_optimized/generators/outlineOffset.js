import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateOutlineOffset = createSimpleGenerator({
  prefix: "outline-offset",
  property: "outline-offset",
  themeKey: "outlineOffset"
});;

export default generateOutlineOffset;
