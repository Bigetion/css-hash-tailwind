import { createSimpleGenerator } from "../utils/generatorFactory";

const generateWordBreak = createSimpleGenerator({
  prefix: "break",
  property: "word-break",
  themeKey: "wordBreak"
});;

export default generateWordBreak;
