import { generateSimpleUtility } from "../utils/generator";

/**
 * Generate scroll-snap-type utility classes
 * Controls how strictly snap points are enforced on a scroll container
 *
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  // Main snap type values (none, x, y, both)
  const snapTypeValues = {
    none: "none",
    x: "x var(--scroll-snap-strictness)",
    y: "y var(--scroll-snap-strictness)",
    both: "both var(--scroll-snap-strictness)",
  };

  // Generate the main snap type utilities with default strictness
  const snapTypeUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: [
      {
        property: "--scroll-snap-strictness",
        transformValue: () => "proximity",
      },
      "scroll-snap-type",
    ],
    utilityPrefix: "snap",
    valueMap: snapTypeValues,
    variantKey: "scrollSnapType",
  });

  // Generate the strictness utilities (mandatory, proximity)
  const strictnessValues = {
    mandatory: "mandatory",
    proximity: "proximity",
  };

  const strictnessUtilities = generateSimpleUtility({
    configOptions,
    cssProperty: "--scroll-snap-strictness",
    utilityPrefix: "snap",
    valueMap: strictnessValues,
    variantKey: "scrollSnapType",
  });

  // Combine all utilities
  return snapTypeUtilities + "\n" + strictnessUtilities;
}
