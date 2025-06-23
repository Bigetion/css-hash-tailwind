import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateMaxWidth = createSimpleGenerator({
  prefix: "max-w",
  property: "max-width",
  themeKey: "maxWidth"
});;

export default generateMaxWidth;
