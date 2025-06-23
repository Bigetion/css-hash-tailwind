import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateOverflow = createSimpleGenerator({
  prefix: "overflow",
  property: "overflow",
  themeKey: "overflow"
});;

export default generateOverflow;
