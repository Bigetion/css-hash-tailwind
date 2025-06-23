import { createColorGenerator } from "../utils/generatorFactory";

const generateCaretColor = createColorGenerator({
  prefix: "caret",
  property: "caret-color",
  themeKey: "caretColor"
});;

export default generateCaretColor;
