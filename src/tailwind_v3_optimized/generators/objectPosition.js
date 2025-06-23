import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateObjectPosition = createSimpleGenerator({
  prefix: "object",
  property: "object-position",
  themeKey: "objectPosition"
});;

export default generateObjectPosition;
