import { generateSpecialCaseUtility } from "../utils/generator";

/**
 * Generate container utility classes
 * @param {Object} configOptions - Configuration options
 * @returns {string} Generated CSS string
 */
export default function generator(configOptions = {}) {
  const { theme = {} } = configOptions;
  const { container = {} } = theme;
  
  // Create a map with a single key for the container
  const containerMap = { 
    "": true  // Empty key for the default container class
  };
  
  // Define a function to generate container CSS
  const generateContainerCSS = (key, value) => {
    const { center = false, padding = {} } = container;
    
    let css = "width: 100%;";
    
    if (center) {
      css += "\nmargin-left: auto;\nmargin-right: auto;";
    }
    
    if (Object.keys(padding).length > 0) {
      css += "\npadding-left: var(--container-padding);\npadding-right: var(--container-padding);";
    }
    
    return css;
  };

  return generateSpecialCaseUtility({
    configOptions,
    utilityPrefix: "container",
    valueMap: containerMap,
    variantKey: "container",
    cssGenerator: generateContainerCSS
  });
}
