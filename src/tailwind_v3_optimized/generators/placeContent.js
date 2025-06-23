import { createSimpleGenerator } from "../utils/generatorFactory";

const generatePlaceContent = createSimpleGenerator({
  prefix: "place-content",
  property: "place-content",
  themeKey: "placeContent"
});;

export default generatePlaceContent;
