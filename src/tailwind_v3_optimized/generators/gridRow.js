import { createSimpleGenerator } from "../utils/generatorFactory";

const generateGridRow = createSimpleGenerator({
  prefix: "row",
  property: "grid-row",
  themeKey: "gridRow"
});;

export default generateGridRow;
