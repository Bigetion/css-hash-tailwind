import { createSimpleGenerator } from "../utils/generatorFactory";

const generateFlexWrap = createSimpleGenerator({
  prefix: "flex",
  property: "flex-wrap",
  themeKey: "flexWrap"
});;

export default generateFlexWrap;
