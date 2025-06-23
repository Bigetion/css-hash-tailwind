import { createSimpleGenerator } from "../utils/generatorFactory";

const generateGridAutoColumns = createSimpleGenerator({
  prefix: "auto-cols",
  property: "grid-auto-columns",
  themeKey: "gridAutoColumns"
});;

export default generateGridAutoColumns;
