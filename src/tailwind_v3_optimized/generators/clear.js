import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateClear = createSimpleGenerator({
  prefix: "clear",
  property: "clear",
  themeKey: "clear"
});;

export default generateClear;
