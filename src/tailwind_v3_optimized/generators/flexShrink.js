import { createSimpleGenerator } from "../utils/generatorFactory";

const generateFlexShrink = createSimpleGenerator({
  prefix: "shrink",
  property: "flex-shrink",
  themeKey: "flexShrink"
});;

export default generateFlexShrink;
