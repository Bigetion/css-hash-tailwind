import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateObjectFit = createSimpleGenerator({
  prefix: "object",
  property: "object-fit",
  themeKey: "objectFit"
});;

export default generateObjectFit;
