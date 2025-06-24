import { generateCustomUtility } from "../utils/generator";

/**
 * Generate outline style utilities
 * Special handling for 'outline-none' which sets a transparent outline and offset
 * 'solid' style has no suffix (outline instead of outline-solid)
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Define the available outline styles
  const outlineStyles = [
    // Special case for 'none' with transparent outline and offset
    {
      className: "outline-none",
      properties: {
        outline: "2px solid transparent",
        "outline-offset": "2px",
      },
    },
    // Regular outline styles
    {
      className: "outline", // No suffix for 'solid'
      properties: {
        "outline-style": "solid",
      },
    },
    {
      className: "outline-dashed",
      properties: {
        "outline-style": "dashed",
      },
    },
    {
      className: "outline-dotted",
      properties: {
        "outline-style": "dotted",
      },
    },
    {
      className: "outline-double",
      properties: {
        "outline-style": "double",
      },
    },
  ];

  // Generate all outline style utilities at once
  const cssStrings = outlineStyles.map((style) =>
    generateCustomUtility({
      configOptions,
      className: style.className,
      properties: style.properties,
      variantKey: "outlineStyle",
    })
  );

  return cssStrings.join("\n");
}
