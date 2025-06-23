import { createSimpleGenerator } from "../utils/generatorFactory";

const generateTextAlign = createSimpleGenerator({
  prefix: "text",
  property: "text-align",
  themeKey: "textAlign"
});;

export default generateTextAlign;
