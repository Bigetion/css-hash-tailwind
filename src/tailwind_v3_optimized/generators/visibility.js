import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateVisibility = createSimpleGenerator({
  prefix: "",
  property: "visibility",
  themeKey: "visibility"
});;

export default generateVisibility;
