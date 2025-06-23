import { createColorGenerator } from "../utils/generatorFactory";

const generateTextColor = createColorGenerator({
  prefix: "text",
  property: "color",
  themeKey: "textColor",
  supportsOpacity: true,
  opacityVar: "--text-opacity"
});;

export default generateTextColor;
