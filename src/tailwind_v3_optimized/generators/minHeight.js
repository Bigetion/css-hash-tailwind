import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateMinHeight = createSimpleGenerator({
  prefix: "min-h",
  property: "min-height",
  themeKey: "minHeight"
});;

export default generateMinHeight;
