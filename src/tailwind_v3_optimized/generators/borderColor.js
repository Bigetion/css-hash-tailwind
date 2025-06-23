import { createColorGenerator } from "../utils/generatorFactory";

const generateBorderColor = createColorGenerator({
  prefix: "border",
  property: "border-color",
  themeKey: "borderColor",
  supportsOpacity: true,
  opacityVar: "--border-opacity"
});;

export default generateBorderColor;
