import { generateCssString } from "../utils/index";
import { generateSimpleUtility } from "./utils/generatorUtils";

/**
 * Generate overflow utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { prefix: globalPrefix, variants = {} } = configOptions;

  // Create value maps for overflow options
  const valueMap = {
    auto: "auto",
    hidden: "hidden",
    visible: "visible",
    scroll: "scroll",
  };

  // Helper function to generate overflow utilities for a specific direction
  const generateOverflowUtilities = (direction = null) => {
    const directionSuffix = direction ? `-${direction}` : "";
    const propertySuffix = direction ? `-${direction}` : "";

    return generateSimpleUtility({
      configOptions,
      cssProperty: `overflow${propertySuffix}`,
      utilityPrefix: `overflow${directionSuffix}`,
      valueMap,
      variantKey: "overflow",
    });
  };

  // Generate standard overflow utilities
  const overflowCSS = generateOverflowUtilities();

  // Generate overflow-x utilities
  const overflowXCSS = generateOverflowUtilities("x");

  // Generate overflow-y utilities
  const overflowYCSS = generateOverflowUtilities("y");

  // Generate webkit-overflow-scrolling utilities
  const scrollingCSS = generateCssString(
    ({ pseudoClass }) => `
      ${pseudoClass(
        `${globalPrefix}scrolling-touch`,
        variants.overflow || []
      )} {
        -webkit-overflow-scrolling: touch;
      }
      ${pseudoClass(`${globalPrefix}scrolling-auto`, variants.overflow || [])} {
        -webkit-overflow-scrolling: auto;
      }
    `,
    configOptions
  );

  // Combine all CSS strings
  return overflowCSS + overflowXCSS + overflowYCSS + scrollingCSS;
}
