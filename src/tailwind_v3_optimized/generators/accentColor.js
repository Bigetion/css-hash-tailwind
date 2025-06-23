import { createColorGenerator } from "../utils/generatorFactory";

const generateAccentColor = createColorGenerator({
  prefix: "accent",
  property: "accent-color",
  themeKey: "accentColor"
});;

export default generateAccentColor;
