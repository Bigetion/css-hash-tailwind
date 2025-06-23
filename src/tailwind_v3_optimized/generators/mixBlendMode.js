import { createSimpleGenerator } from "../utils/generatorFactory";

const generateMixBlendMode = createSimpleGenerator({
  prefix: "mix-blend",
  property: "mix-blend-mode",
  themeKey: "mixBlendMode"
});;

export default generateMixBlendMode;
