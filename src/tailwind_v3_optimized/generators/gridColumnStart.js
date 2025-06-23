import { createSimpleGenerator } from "../utils/generatorFactory";

const generateGridColumnStart = createSimpleGenerator({
  prefix: "col-start",
  property: "grid-column-start",
  themeKey: "gridColumnStart"
});;

export default generateGridColumnStart;
