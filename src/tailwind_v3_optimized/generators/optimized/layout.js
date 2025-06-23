import { createSimpleGenerator, createVariantGenerator } from "../../utils/generatorFactory";

// Layout generators
export const generateDisplay = createSimpleGenerator({
  prefix: "",
  property: "display",
  themeKey: "display"
});

export const generatePosition = createSimpleGenerator({
  prefix: "",
  property: "position",
  themeKey: "position"
});

export const generateVisibility = createSimpleGenerator({
  prefix: "",
  property: "visibility",
  themeKey: "visibility"
});

export const generateOverflow = createSimpleGenerator({
  prefix: "overflow",
  property: "overflow",
  themeKey: "overflow"
});

export const generateZIndex = createSimpleGenerator({
  prefix: "z",
  property: "z-index",
  themeKey: "zIndex"
});

export const generateFloats = createSimpleGenerator({
  prefix: "float",
  property: "float",
  themeKey: "float"
});

export const generateClear = createSimpleGenerator({
  prefix: "clear",
  property: "clear",
  themeKey: "clear"
});

export const generateBoxSizing = createSimpleGenerator({
  prefix: "box",
  property: "box-sizing",
  themeKey: "boxSizing"
});

export const generateContainer = function(configOptions = {}) {
  const { theme = {}, prefix: globalPrefix } = configOptions;
  const { screens = {} } = theme;
  
  let containerCss = `
    .${globalPrefix}container {
      width: 100%;
    }
  `;
  
  const containerScreens = theme.container?.screens || screens;
  
  Object.entries(containerScreens).forEach(([breakpoint, width]) => {
    containerCss += `
      @media (min-width: ${width}) {
        .${globalPrefix}container {
          max-width: ${width};
        }
      }
    `;
  });
  
  return containerCss;
};

export const generateObjectFit = createSimpleGenerator({
  prefix: "object",
  property: "object-fit",
  themeKey: "objectFit"
});

export const generateObjectPosition = createSimpleGenerator({
  prefix: "object",
  property: "object-position",
  themeKey: "objectPosition"
});

export const generateInset = createVariantGenerator({
  prefix: "",
  variants: {
    'inset': ['top', 'right', 'bottom', 'left'],
    'inset-x': ['right', 'left'],
    'inset-y': ['top', 'bottom'],
    'top': 'top',
    'right': 'right',
    'bottom': 'bottom',
    'left': 'left'
  },
  themeKey: "inset"
});

export const generateSize = createVariantGenerator({
  prefix: "",
  variants: {
    'size': ['width', 'height']
  },
  themeKey: "size"
});

export const generateWidth = createSimpleGenerator({
  prefix: "w",
  property: "width",
  themeKey: "width"
});

export const generateMinWidth = createSimpleGenerator({
  prefix: "min-w",
  property: "min-width",
  themeKey: "minWidth"
});

export const generateMaxWidth = createSimpleGenerator({
  prefix: "max-w",
  property: "max-width",
  themeKey: "maxWidth"
});

export const generateHeight = createSimpleGenerator({
  prefix: "h",
  property: "height",
  themeKey: "height"
});

export const generateMinHeight = createSimpleGenerator({
  prefix: "min-h",
  property: "min-height",
  themeKey: "minHeight"
});

export const generateMaxHeight = createSimpleGenerator({
  prefix: "max-h",
  property: "max-height",
  themeKey: "maxHeight"
});
