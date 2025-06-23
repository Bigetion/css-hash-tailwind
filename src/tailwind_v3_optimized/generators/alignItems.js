import { createSimpleGenerator } from "../utils/generatorFactory";

const generateAlignItems = createSimpleGenerator({
  prefix: "items",
  property: "align-items",
  themeKey: "alignItems"
});;

export default generateAlignItems;
