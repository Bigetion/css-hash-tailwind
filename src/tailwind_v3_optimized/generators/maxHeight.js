import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateMaxHeight = createSimpleGenerator({
  prefix: "max-h",
  property: "max-height",
  themeKey: "maxHeight"
});;

export default generateMaxHeight;
