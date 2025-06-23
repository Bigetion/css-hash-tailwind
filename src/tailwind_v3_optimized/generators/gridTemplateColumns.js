import { createSimpleGenerator } from "../utils/generatorFactory";

const generateGridTemplateColumns = createSimpleGenerator({
  prefix: "grid-cols",
  property: "grid-template-columns",
  themeKey: "gridTemplateColumns"
});;

export default generateGridTemplateColumns;
