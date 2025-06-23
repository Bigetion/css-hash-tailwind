import { createSimpleGenerator } from "../utils/generatorFactory";

const generateJustifyItems = createSimpleGenerator({
  prefix: "justify-items",
  property: "justify-items",
  themeKey: "justifyItems"
});;

export default generateJustifyItems;
