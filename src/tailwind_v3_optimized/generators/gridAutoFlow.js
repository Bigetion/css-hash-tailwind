import { createSimpleGenerator } from "../utils/generatorFactory";

const generateGridAutoFlow = createSimpleGenerator({
  prefix: "grid-flow",
  property: "grid-auto-flow",
  themeKey: "gridAutoFlow"
});;

export default generateGridAutoFlow;
