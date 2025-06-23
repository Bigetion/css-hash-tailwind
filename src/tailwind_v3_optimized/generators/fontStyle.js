import { createSimpleGenerator } from "../utils/generatorFactory";

const generateFontStyle = createSimpleGenerator({
  prefix: "italic",
  property: "font-style",
  themeKey: "fontStyle",
  valueFormatter: () => "italic"
});;

export default generateFontStyle;
