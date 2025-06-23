import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generatePosition = createSimpleGenerator({
  prefix: "",
  property: "position",
  themeKey: "position"
});;

export default generatePosition;
