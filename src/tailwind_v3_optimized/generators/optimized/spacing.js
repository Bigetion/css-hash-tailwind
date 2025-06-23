import { createVariantGenerator } from "../../utils/generatorFactory";
import { generateCssString } from "../../utils/index";

// Spacing generators
export const generatePadding = createVariantGenerator({
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
});

export const generateMargin = function(configOptions = {}) {
  const { theme = {} } = configOptions;
  const marginValues = { ...theme.margin || {} };
  
  // Generate negative margins
  Object.entries(marginValues).forEach(([key, value]) => {
    if (key !== "auto" && key !== "0") {
      marginValues[`-${key}`] = `-${value}`.replace("--", "-");
    }
  });
  
  // Use the variant generator with our extended margin values
  const variantGenerator = createVariantGenerator({
    prefix: "m",
    variants: {
      'default': 'margin',
      'y': ['margin-top', 'margin-bottom'],
      'x': ['margin-left', 'margin-right'],
      't': 'margin-top',
      'r': 'margin-right',
      'b': 'margin-bottom',
      'l': 'margin-left'
    },
    themeKey: "margin"
  });
  
  return variantGenerator({
    ...configOptions,
    theme: {
      ...configOptions.theme,
      margin: marginValues
    }
  });
};

export const generateGap = createVariantGenerator({
  prefix: "gap",
  variants: {
    'default': 'gap',
    'x': 'column-gap',
    'y': 'row-gap'
  },
  themeKey: "gap"
});

export const generateSpace = function(configOptions = {}) {
  const { theme = {} } = configOptions;
  const spaceValues = { ...theme.space || {} };
  
  // Generate negative space
  Object.entries(spaceValues).forEach(([key, value]) => {
    if (key !== "auto" && key !== "0") {
      spaceValues[`-${key}`] = `-${value}`.replace("--", "-");
    }
  });
  
  // Define helper function for space variants
  const generateSpaceVariant = (axis, property) => {
    const { prefix } = configOptions;
    const fullPrefix = `${prefix}space-${axis}`;
    
    return generateCssString(({ getCssByOptions, pseudoClass }) => {
      return getCssByOptions(
        spaceValues,
        (key, value) => `
          ${pseudoClass(`${fullPrefix}-${key}`, configOptions.variants.space)} > :not([hidden]) ~ :not([hidden]) {
            --space-${axis}-reverse: 0;
            ${property}: calc(${value} * var(--space-${axis}-reverse));
            ${property}-reverse: calc(${value} * calc(1 - var(--space-${axis}-reverse)));
          }
          ${pseudoClass(`${fullPrefix}-reverse`, configOptions.variants.space)} > :not([hidden]) ~ :not([hidden]) {
            --space-${axis}-reverse: 1;
          }
        `
      );
    }, configOptions);
  };
  
  // Generate x and y space variants
  const xSpace = generateSpaceVariant('x', 'margin-right');
  const ySpace = generateSpaceVariant('y', 'margin-bottom');
  
  return xSpace + ySpace;
};

export const generateScrollMargin = createVariantGenerator({
  prefix: "scroll-m",
  variants: {
    'default': 'scroll-margin',
    'y': ['scroll-margin-top', 'scroll-margin-bottom'],
    'x': ['scroll-margin-left', 'scroll-margin-right'],
    't': 'scroll-margin-top',
    'r': 'scroll-margin-right',
    'b': 'scroll-margin-bottom',
    'l': 'scroll-margin-left'
  },
  themeKey: "scrollMargin"
});

export const generateScrollPadding = createVariantGenerator({
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
});
