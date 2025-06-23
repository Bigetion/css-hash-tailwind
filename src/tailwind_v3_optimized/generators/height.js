import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateHeight = createSimpleGenerator({
  prefix: "h",
  property: "height",
  themeKey: "height"
});;

export default generateHeight;
