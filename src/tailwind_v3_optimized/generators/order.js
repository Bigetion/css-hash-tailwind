import { createSimpleGenerator } from "../utils/generatorFactory";

const generateOrder = createSimpleGenerator({
  prefix: "order",
  property: "order",
  themeKey: "order"
});;

export default generateOrder;
