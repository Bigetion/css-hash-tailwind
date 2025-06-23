import { createSimpleGenerator, createVariantGenerator } from "../utils/generatorFactory";

const generateBorderCollapse = createSimpleGenerator({
  prefix: "border",
  property: "border-collapse",
  themeKey: "borderCollapse"
});;

export default generateBorderCollapse;
