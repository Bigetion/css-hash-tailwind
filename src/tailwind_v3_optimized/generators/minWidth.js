import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateMinWidth = createSimpleGenerator({
  prefix: "min-w",
  property: "min-width",
  themeKey: "minWidth"
});;

export default generateMinWidth;
