import { createColorGenerator } from "../utils/generatorFactory";

const generateTextDecorationColor = createColorGenerator({
  prefix: "decoration",
  property: "text-decoration-color",
  themeKey: "textDecorationColor",
  supportsOpacity: true,
  opacityVar: "--text-decoration-opacity"
});;

export default generateTextDecorationColor;
