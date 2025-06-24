import { generateCssString } from "../../utils/index";

/**
 * Generate a simple property-value CSS utility
 * Used for simple utilities that map directly to a CSS property with optional variants
 *
 * @param {Object} configOptions - Configuration options * @param {string|string[]|Object[]} cssProperty - The CSS property to generate. Can be:
 *                                   - string: a single CSS property
 *                                   - string[]: multiple CSS properties with the same value *                                   - Object[]: array of objects with 'property' and 'transformValue' keys for custom value transformation per property
 *                                     Example: [{property: 'width', transformValue: v => v}, {property: 'height', transformValue: v => `calc(${v} * 2)`}]
 * @param {string} utilityPrefix - The prefix for utility classes
 * @param {Object} valueMap - Map of tailwind classes to CSS property values
 * @param {string} variantKey - Key for variants in configOptions
 * @param {function} transformValue - Optional function to transform the value (used for simple string properties)
 * @param {boolean} useHyphen - Whether to use a hyphen between prefix and key (default: true)
 * @param {Array} propertyVariants - Optional array of property variants to generate (e.g., x/y variants for gap)
 *                                  Each variant should be an object with 'suffix' and 'property' keys
 *                                  Example: [{suffix: 'x', property: 'column-gap'}, {suffix: 'y', property: 'row-gap'}]
 * @returns {string} Generated CSS string
 */
export function generateSimpleUtility({
  configOptions,
  cssProperty,
  utilityPrefix,
  valueMap,
  variantKey,
  transformValue = (value) => value,
  useHyphen = true,
  // New parameter to support variants like x/y for gap
  propertyVariants = [],
}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;
  const prefix = `${globalPrefix}${utilityPrefix}`;
  const variantOptions = variants[variantKey] || [];

  return generateCssString(({ pseudoClass, getCssByOptions }) => {
    return getCssByOptions(valueMap, (key, value) => {
      // Determine class name based on useHyphen flag
      const className = useHyphen ? `${prefix}-${key}` : `${prefix}${key}`;

      let result = `
          ${pseudoClass(className, variantOptions)} {
            ${
              // Handle three different types of cssProperty
              Array.isArray(cssProperty)
                ? cssProperty
                    .map((prop) => {
                      // Check if prop is an object with property and transformValue keys
                      if (typeof prop === "object" && prop.property) {
                        const propTransform =
                          prop.transformValue || transformValue;
                        return `${prop.property}: ${propTransform(value)};`;
                      }
                      // Simple string property
                      return `${prop}: ${transformValue(value)};`;
                    })
                    .join("\n            ")
                : `${cssProperty}: ${transformValue(value)};`
            }
          }
        `;

      // Add variant properties if provided
      if (propertyVariants && propertyVariants.length > 0) {
        propertyVariants.forEach((variant) => {
          const variantClassName = useHyphen
            ? `${prefix}-${variant.suffix}-${key}`
            : `${prefix}${variant.suffix}-${key}`;

          result += `
          ${pseudoClass(variantClassName, variantOptions)} {
            ${variant.property}: ${transformValue(value)};
          }
          `;
        });
      }

      return result;
    });
  }, configOptions);
}

/**
 * Generate a color-based utility with opacity support
 * Used for utilities like text-color, background-color, border-color, etc.
 *
 * @param {Object} configOptions - Configuration options
 * @param {string} cssProperty - The CSS property to set (e.g., "color", "background-color")
 * @param {string} utilityPrefix - The prefix for utility classes (e.g., "text", "bg")
 * @param {Object} colorMap - Map of color names to color values
 * @param {string} variantKey - Key for variants in configOptions
 * @param {string} opacityVar - The CSS variable name for opacity (e.g., "--text-opacity")
 * @param {function} extraTransforms - Additional transforms for generated CSS
 * @returns {string} Generated CSS string
 */
export function generateColorUtility({
  configOptions,
  cssProperty,
  utilityPrefix,
  colorMap,
  variantKey,
  opacityVar,
  extraTransforms = (key, cssString) => cssString,
}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;
  const prefix = `${globalPrefix}${utilityPrefix}`;
  const variantOptions = variants[variantKey] || [];

  return generateCssString(({ pseudoClass, getCssByColors }) => {
    const cssString = getCssByColors(colorMap, (key, value, rgbValue) => {
      let rgbPropertyValue = "";
      if (rgbValue) {
        rgbPropertyValue = `${cssProperty}: rgba(${rgbValue}, var(${opacityVar}));`;
      }

      let baseCSS = `
            ${pseudoClass(`${prefix}-${key}`, variantOptions)} {
              ${opacityVar}: 1;
              ${cssProperty}: ${value};${rgbPropertyValue}
            }
          `;

      return extraTransforms(key, baseCSS);
    });
    return cssString;
  }, configOptions);
}

/**
 * Generate directional utilities (like margin, padding)
 * Used for utilities that have directional variants (top, right, bottom, left, x, y)
 *
 * @param {Object} configOptions - Configuration options
 * @param {string} cssProperty - Base CSS property without direction (e.g., "margin", "padding")
 * @param {string} utilityPrefix - Single letter prefix for utility classes (e.g., "m", "p")
 * @param {Object} valueMap - Map of size keys to size values
 * @param {string} variantKey - Key for variants in configOptions
 * @param {boolean} supportNegative - Whether to support negative values
 * @returns {string} Generated CSS string
 */
export function generateDirectionalUtility({
  configOptions,
  cssProperty,
  utilityPrefix,
  valueMap,
  variantKey,
  supportNegative = false,
}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;
  const prefix = `${globalPrefix}${utilityPrefix}`;
  const variantOptions = variants[variantKey] || [];

  // Clone the value map to avoid modifying the original
  const values = { ...valueMap };

  // Add negative values if supported
  if (supportNegative) {
    Object.entries(values).forEach(([key, value]) => {
      values[`-${key}`] = `-${value}`.replace("--", "-");
    });
  }

  return generateCssString(({ pseudoClass, getCssByOptions }) => {
    const cssString = getCssByOptions(values, (keyTmp, value) => {
      let currentPrefix = prefix;
      let key = keyTmp;

      // Handle negative values
      if (supportNegative && `${key}`.indexOf("-") >= 0) {
        key = key.split("-").join("");
        currentPrefix = `${globalPrefix}-${utilityPrefix}`;
      }

      return `
          ${pseudoClass(`${currentPrefix}-${key}`, variantOptions)} {
            ${cssProperty}: ${value};
          }
          ${pseudoClass(`${currentPrefix}y-${key}`, variantOptions)} {
            ${cssProperty}-top: ${value};
            ${cssProperty}-bottom: ${value};
          }
          ${pseudoClass(`${currentPrefix}x-${key}`, variantOptions)} {
            ${cssProperty}-left: ${value};
            ${cssProperty}-right: ${value};
          }
          ${pseudoClass(`${currentPrefix}t-${key}`, variantOptions)} {
            ${cssProperty}-top: ${value};
          }
          ${pseudoClass(`${currentPrefix}r-${key}`, variantOptions)} {
            ${cssProperty}-right: ${value};
          }
          ${pseudoClass(`${currentPrefix}b-${key}`, variantOptions)} {
            ${cssProperty}-bottom: ${value};
          }
          ${pseudoClass(`${currentPrefix}l-${key}`, variantOptions)} {
            ${cssProperty}-left: ${value};
          }
          ${pseudoClass(`${currentPrefix}s-${key}`, variantOptions)} {
            ${cssProperty}-inline-start: ${value};
          }
          ${pseudoClass(`${currentPrefix}e-${key}`, variantOptions)} {
            ${cssProperty}-inline-end: ${value};
          }
        `;
    });
    return cssString;
  }, configOptions);
}

/**
 * Generate positioning utilities for inset and related properties
 * Used for inset, top, right, bottom, left, start, end utilities
 *
 * @param {Object} configOptions - Configuration options
 * @param {Object} valueMap - Map of size keys to size values
 * @param {string} variantKey - Key for variants in configOptions (default: "inset")
 * @param {boolean} supportNegative - Whether to support negative values (default: true)
 * @returns {string} Generated CSS string
 */
export function generatePositioningUtility({
  configOptions,
  valueMap,
  variantKey = "inset",
  supportNegative = true,
}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;
  const variantOptions = variants[variantKey] || [];

  // Clone the value map to avoid modifying the original
  const values = { ...valueMap };

  // Add negative values if supported
  if (supportNegative) {
    Object.entries(values).forEach(([key, value]) => {
      // Only add negative values for numeric values, not for auto, full, etc.
      // Skip if the key already starts with a minus sign
      if (
        !key.startsWith("-") &&
        key !== "auto" &&
        key !== "px" &&
        key !== "full" &&
        key !== "screen" &&
        !key.includes("/")
      ) {
        values[`-${key}`] = `-${value}`.replace("--", "-");
      }
    });
  }

  return generateCssString(({ pseudoClass, getCssByOptions }) => {
    const cssString = getCssByOptions(values, (keyTmp, value) => {
      let key = keyTmp;
      let isNegative = false;

      // Handle negative values
      if (supportNegative && `${key}`.startsWith("-")) {
        key = key.substring(1);
        isNegative = true;
      }

      // Create the appropriate class prefix for negative values
      const insetPrefix = isNegative
        ? `${globalPrefix}-inset`
        : `${globalPrefix}inset`;
      const topPrefix = isNegative
        ? `${globalPrefix}-top`
        : `${globalPrefix}top`;
      const rightPrefix = isNegative
        ? `${globalPrefix}-right`
        : `${globalPrefix}right`;
      const bottomPrefix = isNegative
        ? `${globalPrefix}-bottom`
        : `${globalPrefix}bottom`;
      const leftPrefix = isNegative
        ? `${globalPrefix}-left`
        : `${globalPrefix}left`;
      const startPrefix = isNegative
        ? `${globalPrefix}-start`
        : `${globalPrefix}start`;
      const endPrefix = isNegative
        ? `${globalPrefix}-end`
        : `${globalPrefix}end`;

      return `        ${pseudoClass(`${insetPrefix}-${key}`, variantOptions)} {
          inset: ${value};
        }
        ${pseudoClass(`${insetPrefix}-x-${key}`, variantOptions)} {
          left: ${value};
          right: ${value};
        }
        ${pseudoClass(`${insetPrefix}-y-${key}`, variantOptions)} {
          top: ${value};
          bottom: ${value};
        }
        ${pseudoClass(`${startPrefix}-${key}`, variantOptions)} {
          inset-inline-start: ${value};
        }
        ${pseudoClass(`${endPrefix}-${key}`, variantOptions)} {
          inset-inline-end: ${value};
        }
        ${pseudoClass(`${topPrefix}-${key}`, variantOptions)} {
          top: ${value};
        }
        ${pseudoClass(`${rightPrefix}-${key}`, variantOptions)} {
          right: ${value};
        }
        ${pseudoClass(`${bottomPrefix}-${key}`, variantOptions)} {
          bottom: ${value};
        }
        ${pseudoClass(`${leftPrefix}-${key}`, variantOptions)} {
          left: ${value};
        }
      `;
    });
    return cssString;
  }, configOptions);
}

/**
 * Generate directional CSS properties with comprehensive options
 * This is a more generalized version that can handle various CSS properties
 * that need directional variants (top/right/bottom/left or logical properties)
 *
 * @param {Object} options - Configuration options
 * @param {Object} options.configOptions - Configuration options from Tailwind
 * @param {Object} options.valueMap - Map of size keys to size values
 * @param {string} options.variantKey - Key for variants in configOptions
 * @param {boolean} options.supportNegative - Whether to support negative values
 * @param {string} options.mainProperty - The main CSS property (e.g., 'inset', 'margin', 'padding')
 * @param {string} options.utilityPrefix - The prefix for utility classes (e.g., 'inset', 'm', 'p')
 * @param {boolean} options.useLogicalProps - Whether to generate logical properties (start/end)
 * @param {boolean} options.useAllDirections - Whether to generate all directional variants
 * @param {boolean} options.useShorthand - Whether to generate x/y shorthand variants
 * @returns {string} Generated CSS string
 */
export function generateDirectionalProperties({
  configOptions,
  valueMap,
  variantKey,
  supportNegative = true,
  mainProperty,
  utilityPrefix,
  useLogicalProps = false,
  useAllDirections = true,
  useShorthand = true,
}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;
  const variantOptions = variants[variantKey] || [];

  // Clone the value map to avoid modifying the original
  const values = { ...valueMap };

  // Add negative values if supported
  if (supportNegative) {
    Object.entries(values).forEach(([key, value]) => {
      // Skip special values and already negative values
      if (
        !key.startsWith("-") &&
        key !== "auto" &&
        key !== "px" &&
        key !== "full" &&
        key !== "screen" &&
        !key.includes("/")
      ) {
        values[`-${key}`] = `-${value}`.replace("--", "-");
      }
    });
  }

  return generateCssString(({ pseudoClass, getCssByOptions }) => {
    const cssString = getCssByOptions(values, (keyTmp, value) => {
      let key = keyTmp;
      let isNegative = false;

      // Handle negative values
      if (supportNegative && `${key}`.startsWith("-")) {
        key = key.substring(1);
        isNegative = true;
      }

      // Create the appropriate class prefix for negative values
      const basePrefix = isNegative
        ? `${globalPrefix}-${utilityPrefix}`
        : `${globalPrefix}${utilityPrefix}`;
      const topPrefix = isNegative
        ? `${globalPrefix}-top`
        : `${globalPrefix}top`;
      const rightPrefix = isNegative
        ? `${globalPrefix}-right`
        : `${globalPrefix}right`;
      const bottomPrefix = isNegative
        ? `${globalPrefix}-bottom`
        : `${globalPrefix}bottom`;
      const leftPrefix = isNegative
        ? `${globalPrefix}-left`
        : `${globalPrefix}left`;

      // Logical property prefixes (for RTL support)
      const startPrefix = isNegative
        ? `${globalPrefix}-start`
        : `${globalPrefix}start`;
      const endPrefix = isNegative
        ? `${globalPrefix}-end`
        : `${globalPrefix}end`;

      let result = "";

      // Main property (e.g., inset: 1px)
      result += `
        ${pseudoClass(`${basePrefix}-${key}`, variantOptions)} {
          ${mainProperty}: ${value};
        }
      `;
      // Shorthand x/y variants (e.g., inset-x, margin-y)
      if (useShorthand) {
        // Special case for inset that doesn't use property prefixing for directions
        if (mainProperty === "inset") {
          result += `
            ${pseudoClass(`${basePrefix}-x-${key}`, variantOptions)} {
              left: ${value};
              right: ${value};
            }
            ${pseudoClass(`${basePrefix}-y-${key}`, variantOptions)} {
              top: ${value};
              bottom: ${value};
            }
          `;
        } else {
          result += `
            ${pseudoClass(`${basePrefix}-x-${key}`, variantOptions)} {
              ${mainProperty}-left: ${value};
              ${mainProperty}-right: ${value};
            }
            ${pseudoClass(`${basePrefix}-y-${key}`, variantOptions)} {
              ${mainProperty}-top: ${value};
              ${mainProperty}-bottom: ${value};
            }
          `;
        }
      }
      // Individual direction variants
      if (useAllDirections) {
        // Special case for inset that doesn't use property prefixing for directions
        if (mainProperty === "inset") {
          result += `
            ${pseudoClass(`${topPrefix}-${key}`, variantOptions)} {
              top: ${value};
            }
            ${pseudoClass(`${rightPrefix}-${key}`, variantOptions)} {
              right: ${value};
            }
            ${pseudoClass(`${bottomPrefix}-${key}`, variantOptions)} {
              bottom: ${value};
            }
            ${pseudoClass(`${leftPrefix}-${key}`, variantOptions)} {
              left: ${value};
            }
          `;
        } else {
          result += `
            ${pseudoClass(`${topPrefix}-${key}`, variantOptions)} {
              ${mainProperty}-top: ${value};
            }
            ${pseudoClass(`${rightPrefix}-${key}`, variantOptions)} {
              ${mainProperty}-right: ${value};
            }
            ${pseudoClass(`${bottomPrefix}-${key}`, variantOptions)} {
              ${mainProperty}-bottom: ${value};
            }
            ${pseudoClass(`${leftPrefix}-${key}`, variantOptions)} {
              ${mainProperty}-left: ${value};
            }
          `;
        }
      }

      // Logical properties (RTL support)
      if (useLogicalProps) {
        result += `
          ${pseudoClass(`${startPrefix}-${key}`, variantOptions)} {
            ${mainProperty}-inline-start: ${value};
          }
          ${pseudoClass(`${endPrefix}-${key}`, variantOptions)} {
            ${mainProperty}-inline-end: ${value};
          }
        `;
      }

      return result;
    });
    return cssString;
  }, configOptions);
}

/**
 * Generate a custom utility with multiple CSS properties
 * Used for special utilities that set multiple CSS properties with a single class
 *
 * @param {Object} configOptions - Configuration options
 * @param {string|null} utilityPrefix - The prefix for utility classes (empty string if not needed)
 * @param {string} className - The specific class name (without the global prefix)
 * @param {Object} properties - An object mapping CSS properties to their values
 * @param {string} variantKey - Key for variants in configOptions
 * @returns {string} Generated CSS string
 */
export function generateCustomUtility({
  configOptions,
  utilityPrefix = "",
  className,
  properties,
  variantKey,
}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;
  const fullPrefix = utilityPrefix
    ? `${globalPrefix}${utilityPrefix}`
    : globalPrefix;
  const variantOptions = variants[variantKey] || [];

  return generateCssString(({ pseudoClass }) => {
    // Create CSS property-value pairs from the properties object
    const cssProperties = Object.entries(properties)
      .map(([prop, value]) => `${prop}: ${value};`)
      .join("\n      ");

    return `
      ${pseudoClass(`${fullPrefix}${className}`, variantOptions)} {
        ${cssProperties}
      }
    `;
  }, configOptions);
}

/**
 * Generate a utility with support for negative values with custom prefixes
 * Used for utilities that need different prefix handling for negative values (like text-indent)
 *
 * @param {Object} configOptions - Configuration options
 * @param {string} cssProperty - The CSS property to set
 * @param {string} utilityPrefix - The prefix for positive utility classes
 * @param {string} negativePrefix - The prefix for negative utility classes (will override globalPrefix)
 * @param {Object} valueMap - Map of values without the negative entries
 * @param {string} variantKey - Key for variants in configOptions
 * @returns {string} Generated CSS string
 */
export function generateNegativeSupportedUtility({
  configOptions,
  cssProperty,
  utilityPrefix,
  negativePrefix,
  valueMap,
  variantKey,
}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;
  const positivePrefix = `${globalPrefix}${utilityPrefix}`;
  const variantOptions = variants[variantKey] || [];

  // Create a combined map with both positive and negative values
  const combinedValues = { ...valueMap };
  Object.entries(valueMap).forEach(([key, value]) => {
    combinedValues[`-${key}`] = `-${value}`.replace("--", "-");
  });

  return generateCssString(({ pseudoClass, getCssByOptions }) => {
    return getCssByOptions(combinedValues, (keyTmp, value) => {
      let prefix = positivePrefix;
      let key = keyTmp;

      // Handle negative keys
      if (`${key}`.indexOf("-") === 0) {
        key = key.substring(1); // Remove the leading minus sign
        prefix = negativePrefix;
      }

      return `
        ${pseudoClass(`${prefix}-${key}`, variantOptions)} {
          ${cssProperty}: ${value};
        }
      `;
    });
  }, configOptions);
}
