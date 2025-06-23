import { createSimpleGenerator } from "../utils/generatorFactory";

const generateTextWrap = createSimpleGenerator({
  prefix: "text",
  property: "text-wrap",
  themeKey: "textWrap"
});;

export default generateTextWrap;
