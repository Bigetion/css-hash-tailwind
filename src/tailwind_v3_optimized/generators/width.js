import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateWidth = createSimpleGenerator({
  prefix: "w",
  property: "width",
  themeKey: "width"
});;

export default generateWidth;
