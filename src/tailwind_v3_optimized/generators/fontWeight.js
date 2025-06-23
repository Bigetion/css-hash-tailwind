import { createSimpleGenerator } from "../utils/generatorFactory";

const generateFontWeight = createSimpleGenerator({
  prefix: "font",
  property: "font-weight",
  themeKey: "fontWeight"
});;

export default generateFontWeight;
