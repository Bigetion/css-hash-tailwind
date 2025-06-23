import { createSimpleGenerator } from "../utils/generatorFactory";

const generateGridColumn = createSimpleGenerator({
  prefix: "col",
  property: "grid-column",
  themeKey: "gridColumn"
});;

export default generateGridColumn;
