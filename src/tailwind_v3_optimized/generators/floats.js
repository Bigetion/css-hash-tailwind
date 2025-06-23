import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateFloats = createSimpleGenerator({
  prefix: "float",
  property: "float",
  themeKey: "float"
});;

export default generateFloats;
