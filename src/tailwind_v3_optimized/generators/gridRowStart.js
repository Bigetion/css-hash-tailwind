import { createSimpleGenerator } from "../utils/generatorFactory";

const generateGridRowStart = createSimpleGenerator({
  prefix: "row-start",
  property: "grid-row-start",
  themeKey: "gridRowStart"
});;

export default generateGridRowStart;
