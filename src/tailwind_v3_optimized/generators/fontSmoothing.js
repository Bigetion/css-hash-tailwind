import { createSimpleGenerator } from "../utils/generatorFactory";

const generateFontSmoothing = createSimpleGenerator({
  prefix: "antialiased",
  property: "-webkit-font-smoothing",
  themeKey: "fontSmoothing",
  valueFormatter: () => "antialiased"
});;

export default generateFontSmoothing;
