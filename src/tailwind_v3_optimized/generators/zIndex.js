import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateZIndex = createSimpleGenerator({
  prefix: "z",
  property: "z-index",
  themeKey: "zIndex"
});;

export default generateZIndex;
