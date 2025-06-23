import { createSimpleGenerator } from "../utils/generatorFactory";

const generateFontSize = createSimpleGenerator({
  prefix: "text",
  property: "font-size",
  themeKey: "fontSize"
});;

export default generateFontSize;
