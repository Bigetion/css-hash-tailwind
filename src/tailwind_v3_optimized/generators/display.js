import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateDisplay = createSimpleGenerator({
  prefix: "",
  property: "display",
  themeKey: "display"
});;

export default generateDisplay;
