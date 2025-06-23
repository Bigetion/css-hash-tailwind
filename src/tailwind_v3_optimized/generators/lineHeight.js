import { createSimpleGenerator } from "../utils/generatorFactory";

const generateLineHeight = createSimpleGenerator({
  prefix: "leading",
  property: "line-height",
  themeKey: "lineHeight"
});;

export default generateLineHeight;
