import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate cursor utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Create a value map from the array of cursor options
  const cursorOptions = [
    "auto",
    "default",
    "pointer",
    "wait",
    "text",
    "move",
    "help",
    "not-allowed",
    "none",
    "context-menu",
    "progress",
    "cell",
    "crosshair",
    "vertical-text",
    "alias",
    "copy",
    "no-drop",
    "grab",
    "grabbing",
    "all-scroll",
    "col-resize",
    "row-resize",
    "n-resize",
    "e-resize",
    "s-resize",
    "w-resize",
    "ne-resize",
    "nw-resize",
    "se-resize",
    "sw-resize",
    "ew-resize",
    "ns-resize",
    "nesw-resize",
    "nwse-resize",
    "zoom-in",
    "zoom-out",
  ].reduce((acc, value) => {
    acc[value] = value;
    return acc;
  }, {});

  return generateSimpleUtility({
    configOptions,
    cssProperty: "cursor",
    utilityPrefix: "cursor",
    valueMap: cursorOptions,
    variantKey: "cursor",
  });
}
