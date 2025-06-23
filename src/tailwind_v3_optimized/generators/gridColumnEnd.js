import { createSimpleGenerator } from "../utils/generatorFactory";

const generateGridColumnEnd = createSimpleGenerator({
  prefix: "col-end",
  property: "grid-column-end",
  themeKey: "gridColumnEnd"
});;

export default generateGridColumnEnd;
