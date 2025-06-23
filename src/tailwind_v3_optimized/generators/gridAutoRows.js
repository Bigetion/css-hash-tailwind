import { createSimpleGenerator } from "../utils/generatorFactory";

const generateGridAutoRows = createSimpleGenerator({
  prefix: "auto-rows",
  property: "grid-auto-rows",
  themeKey: "gridAutoRows"
});;

export default generateGridAutoRows;
