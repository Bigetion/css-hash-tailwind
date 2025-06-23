import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateRingOffsetWidth = createSimpleGenerator({
  prefix: "ring-offset",
  property: "--ring-offset-width",
  themeKey: "ringOffsetWidth"
});;

export default generateRingOffsetWidth;
