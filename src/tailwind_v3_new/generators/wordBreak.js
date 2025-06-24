import { generateCustomUtility } from "../utils/generator";

/**
 * Generates CSS utility classes for word breaking and overflow wrap
 *
 * @param {Object} configOptions - Configuration options from Tailwind config
 * @returns {string} Generated CSS string for word-break utilities
 */
export default function generator(configOptions = {}) {
  // Generate break-normal class (sets both overflow-wrap and word-break)
  const breakNormal = generateCustomUtility({
    configOptions,
    className: "break-normal",
    properties: {
      "overflow-wrap": "normal",
      "word-break": "normal",
    },
    variantKey: "wordBreak",
  });

  // Generate break-words class
  const breakWords = generateCustomUtility({
    configOptions,
    className: "break-words",
    properties: {
      "overflow-wrap": "break-word",
    },
    variantKey: "wordBreak",
  });

  // Generate break-all class
  const breakAll = generateCustomUtility({
    configOptions,
    className: "break-all",
    properties: {
      "word-break": "break-all",
    },
    variantKey: "wordBreak",
  });

  // Generate break-keep class
  const breakKeep = generateCustomUtility({
    configOptions,
    className: "break-keep",
    properties: {
      "word-break": "keep-all",
    },
    variantKey: "wordBreak",
  });

  // Combine all utilities
  return breakNormal + breakWords + breakAll + breakKeep;
}
