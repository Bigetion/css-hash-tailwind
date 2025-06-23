import { createSimpleGenerator } from "../utils/generatorFactory";

const generatePlaceItems = createSimpleGenerator({
  prefix: "place-items",
  property: "place-items",
  themeKey: "placeItems"
});;

export default generatePlaceItems;
