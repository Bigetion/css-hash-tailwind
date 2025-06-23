import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateBoxSizing = createSimpleGenerator({
  prefix: "box",
  property: "box-sizing",
  themeKey: "boxSizing"
});;

export default generateBoxSizing;
