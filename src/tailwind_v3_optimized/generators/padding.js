import { createVariantGenerator } from "../utils/generatorFactory";
import { generateCssString } from "../utils/index";

const generatePadding = createVariantGenerator({
  prefix: "p",
  variants: {
    'default': 'padding',
    'y': ['padding-top', 'padding-bottom'],
    'x': ['padding-left', 'padding-right'],
    't': 'padding-top',
    'r': 'padding-right',
    'b': 'padding-bottom',
    'l': 'padding-left'
  },
  themeKey: "padding"
});;

export default generatePadding;
