import { createSimpleGenerator } from "../utils/generatorFactory";

const generateBoxShadowColor = createSimpleGenerator({
  prefix: "shadow",
  property: "--shadow-color",
  themeKey: "boxShadowColor",
  valueFormatter: (value) => {
    if (value.startsWith('#')) {
      const rgbValue = hexToRgb(value);
      return `rgb(${rgbValue})`;
    }
    return value;
  }
});;

export default generateBoxShadowColor;
