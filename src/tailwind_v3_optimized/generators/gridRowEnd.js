import { createSimpleGenerator } from "../utils/generatorFactory";

const generateGridRowEnd = createSimpleGenerator({
  prefix: "row-end",
  property: "grid-row-end",
  themeKey: "gridRowEnd"
});;

export default generateGridRowEnd;
