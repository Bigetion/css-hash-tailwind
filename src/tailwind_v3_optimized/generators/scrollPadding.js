import { createVariantGenerator } from "../utils/generatorFactory";
import { generateCssString } from "../utils/index";

const generateScrollPadding = createVariantGenerator({
  prefix: "scroll-p",
  variants: {
    'default': 'scroll-padding',
    'y': ['scroll-padding-top', 'scroll-padding-bottom'],
    'x': ['scroll-padding-left', 'scroll-padding-right'],
    't': 'scroll-padding-top',
    'r': 'scroll-padding-right',
    'b': 'scroll-padding-bottom',
    'l': 'scroll-padding-left'
  },
  themeKey: "scrollPadding"
});;

export default generateScrollPadding;
