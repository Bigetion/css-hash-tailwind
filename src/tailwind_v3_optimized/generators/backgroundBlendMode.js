import { createSimpleGenerator } from "../utils/generatorFactory";

const generateBackgroundBlendMode = createSimpleGenerator({
  prefix: "bg-blend",
  property: "background-blend-mode",
  themeKey: "backgroundBlendMode"
});;

export default generateBackgroundBlendMode;
