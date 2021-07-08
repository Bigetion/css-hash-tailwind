const configOptions = {
  prefix: "",
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  extend: {},
  corePlugins: {
    base: false,
    form: false,
    transform: false,
    container: false,
    boxSizing: false,
    display: false,
    float: false,
    clear: false,
    objectFit: false,
    objectPosition: false,
    overflow: false,
    overscrollBehavior: false,
    position: false,
    inset: false,
    visibility: false,
    zIndex: false,
    flexDirection: false,
    flexWrap: false,
    flex: false,
    flexGrow: false,
    flexShrink: false,
    order: false,
    gridTemplateColumns: false,
    gridColumn: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridTemplateRows: false,
    gridRow: false,
    gridRowStart: false,
    gridRowEnd: false,
    gridAutoFlow: false,
    gridAutoColumns: false,
    gridAutoRows: false,
    gap: false,
    justifyContent: false,
    justifyItems: false,
    justifySelf: false,
    alignContent: false,
    alignItems: false,
    alignSelf: false,
    placeContent: false,
    placeItems: false,
    placeSelf: false,
    padding: false,
    margin: false,
    space: false,
    width: false,
    minWidth: false,
    maxWidth: false,
    height: false,
    minHeight: false,
    maxHeight: false,
    fontSize: false,
    fontSmoothing: false,
    fontStyle: false,
    fontWeight: false,
    fontVariantNumeric: false,
    letterSpacing: false,
    lineHeight: false,
    listStyleType: false,
    listStylePosition: false,
    placeholderColor: false,
    placeholderOpacity: false,
    textAlign: false,
    textColor: false,
    textOpacity: false,
    textDecoration: false,
    textTransform: false,
    verticalAlign: false,
    whitespace: false,
    wordBreak: false,
    backgroundAttachment: false,
    backgroundClip: false,
    backgroundColor: false,
    backgroundOpacity: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    backgroundImage: false,
    gradientColorStops: false,
    borderRadius: false,
    borderWidth: false,
    borderColor: false,
    borderOpacity: false,
    borderStyle: false,
    divideWidth: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
    borderCollapse: false,
    tableLayout: false,
    boxShadow: false,
    opacity: false,
    scale: false,
    rotate: false,
    translate: false,
    skew: false,
    transformOrigin: false,
    appearance: false,
    cursor: false,
    outline: false,
    pointerEvents: false,
    resize: false,
    userSelect: false,
  },
  variants: {
    boxSizing: ["responsive", "hover", "focus"],
    display: ["responsive", "hover", "focus"],
    float: ["responsive", "hover", "focus"],
    clear: ["responsive", "hover", "focus"],
    objectFit: ["responsive", "hover", "focus"],
    objectPosition: ["responsive", "hover", "focus"],
    overflow: ["responsive", "hover", "focus"],
    overscrollBehavior: ["responsive", "hover", "focus"],
    position: ["responsive", "hover", "focus"],
    inset: ["responsive", "hover", "focus"],
    visibility: ["responsive", "hover", "focus"],
    zIndex: ["responsive", "hover", "focus"],
    flexDirection: ["responsive", "hover", "focus"],
    flexWrap: ["responsive", "hover", "focus"],
    flex: ["responsive", "hover", "focus"],
    flexGrow: ["responsive", "hover", "focus"],
    flexShrink: ["responsive", "hover", "focus"],
    order: ["responsive", "hover", "focus"],
    gridTemplateColumns: ["responsive", "hover", "focus"],
    gridColumn: ["responsive", "hover", "focus"],
    gridColumnStart: ["responsive", "hover", "focus"],
    gridColumnEnd: ["responsive", "hover", "focus"],
    gridTemplateRows: ["responsive", "hover", "focus"],
    gridRow: ["responsive", "hover", "focus"],
    gridRowStart: ["responsive", "hover", "focus"],
    gridRowEnd: ["responsive", "hover", "focus"],
    gridAutoFlow: ["responsive", "hover", "focus"],
    gridAutoColumns: ["responsive", "hover", "focus"],
    gridAutoRows: ["responsive", "hover", "focus"],
    gap: ["responsive", "hover", "focus"],
    justifyContent: ["responsive", "hover", "focus"],
    justifyItems: ["responsive", "hover", "focus"],
    justifySelf: ["responsive", "hover", "focus"],
    alignContent: ["responsive", "hover", "focus"],
    alignItems: ["responsive", "hover", "focus"],
    alignSelf: ["responsive", "hover", "focus"],
    placeContent: ["responsive", "hover", "focus"],
    placeItems: ["responsive", "hover", "focus"],
    placeSelf: ["responsive", "hover", "focus"],
    padding: ["responsive", "hover", "focus"],
    margin: ["responsive", "hover", "focus"],
    space: ["responsive", "hover", "focus"],
    width: ["responsive"],
    minWidth: ["responsive"],
    maxWidth: ["responsive"],
    height: ["responsive", "hover", "focus"],
    minHeight: ["responsive", "hover", "focus"],
    maxHeight: ["responsive", "hover", "focus"],
    fontSize: ["responsive", "hover", "focus"],
    fontSmoothing: ["responsive", "hover", "focus"],
    fontStyle: ["responsive", "hover", "focus"],
    fontWeight: ["responsive", "hover", "focus", "active", "group-hover"],
    fontVariantNumeric: ["responsive", "hover", "focus"],
    letterSpacing: ["responsive", "hover", "focus"],
    lineHeight: ["responsive", "hover", "focus"],
    listStyleType: ["responsive", "hover", "focus"],
    listStylePosition: ["responsive", "hover", "focus"],
    placeholderColor: ["responsive", "focus", "hover", "active"],
    placeholderOpacity: ["responsive", "focus", "hover", "active"],
    textAlign: ["responsive", "focus", "hover"],
    textColor: ["responsive", "focus", "hover"],
    textOpacity: ["responsive", "focus", "hover"],
    textDecoration: ["responsive", "hover", "focus", "active", "group-hover"],
    textTransform: ["responsive", "focus", "hover"],
    verticalAlign: ["responsive", "focus", "hover"],
    whitespace: ["responsive", "focus", "hover"],
    wordBreak: ["responsive", "focus", "hover"],
    backgroundAttachment: ["responsive", "hover", "focus"],
    backgroundClip: ["responsive", "hover", "focus"],
    backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"],
    backgroundOpacity: [
      "responsive",
      "hover",
      "focus",
      "active",
      "group-hover",
    ],
    backgroundPosition: ["responsive", "hover", "focus"],
    backgroundRepeat: ["responsive", "hover", "focus"],
    backgroundSize: ["responsive", "hover", "focus"],
    backgroundImage: ["responsive", "hover", "focus"],
    gradientColorStops: [
      "responsive",
      "hover",
      "focus",
      "active",
      "group-hover",
    ],
    borderRadius: ["responsive", "hover", "focus"],
    borderWidth: ["responsive", "hover", "focus"],
    borderColor: ["responsive", "hover", "focus", "active", "group-hover"],
    borderOpacity: ["responsive", "hover", "focus", "active", "group-hover"],
    borderStyle: ["responsive", "hover", "focus"],
    divideWidth: ["responsive", "hover", "focus"],
    divideColor: ["responsive", "hover", "focus"],
    divideOpacity: ["responsive", "hover", "focus"],
    divideStyle: ["responsive", "hover", "focus"],
    borderCollapse: ["responsive", "hover", "focus"],
    tableLayout: ["responsive", "hover", "focus"],
    boxShadow: ["responsive", "hover", "focus", "active", "group-hover"],
    opacity: ["responsive", "hover", "focus", "active", "group-hover"],
    scale: ["responsive", "hover", "focus", "active", "group-hover"],
    rotate: ["responsive", "hover", "focus", "active", "group-hover"],
    translate: ["responsive", "hover", "focus", "active", "group-hover"],
    skew: ["responsive", "hover", "focus", "active", "group-hover"],
    transformOrigin: ["responsive", "hover", "focus"],
    appearance: ["responsive", "hover", "focus"],
    cursor: ["responsive", "hover", "focus"],
    outline: ["responsive", "hover", "focus"],
    pointerEvents: ["responsive", "hover", "focus"],
    resize: ["responsive", "hover", "focus"],
    userSelect: ["responsive", "hover", "focus"],
  },
  theme: {
    spacing: {
      0: "0",
      px: "1px",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      32: "8rem",
      40: "10rem",
      48: "12rem",
      56: "14rem",
      64: "16rem",
      72: "18rem",
      96: "24rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
      red: {
        100: "#fff5f5",
        200: "#fed7d7",
        300: "#feb2b2",
        400: "#fc8181",
        500: "#f56565",
        600: "#e53e3e",
        700: "#c53030",
        800: "#9b2c2c",
        900: "#742a2a",
      },
      orange: {
        100: "#fffaf0",
        200: "#feebc8",
        300: "#fbd38d",
        400: "#f6ad55",
        500: "#ed8936",
        600: "#dd6b20",
        700: "#c05621",
        800: "#9c4221",
        900: "#7b341e",
      },
      yellow: {
        100: "#fffff0",
        200: "#fefcbf",
        300: "#faf089",
        400: "#f6e05e",
        500: "#ecc94b",
        600: "#d69e2e",
        700: "#b7791f",
        800: "#975a16",
        900: "#744210",
      },
      green: {
        100: "#f0fff4",
        200: "#c6f6d5",
        300: "#9ae6b4",
        400: "#68d391",
        500: "#48bb78",
        600: "#38a169",
        700: "#2f855a",
        800: "#276749",
        900: "#22543d",
      },
      teal: {
        100: "#e6fffa",
        200: "#b2f5ea",
        300: "#81e6d9",
        400: "#4fd1c5",
        500: "#38b2ac",
        600: "#319795",
        700: "#2c7a7b",
        800: "#285e61",
        900: "#234e52",
      },
      blue: {
        100: "#ebf8ff",
        200: "#bee3f8",
        300: "#90cdf4",
        400: "#63b3ed",
        500: "#4299e1",
        600: "#3182ce",
        700: "#2b6cb0",
        800: "#2c5282",
        900: "#2a4365",
      },
      indigo: {
        100: "#ebf4ff",
        200: "#c3dafe",
        300: "#a3bffa",
        400: "#7f9cf5",
        500: "#667eea",
        600: "#5a67d8",
        700: "#4c51bf",
        800: "#434190",
        900: "#3c366b",
      },
      purple: {
        100: "#faf5ff",
        200: "#e9d8fd",
        300: "#d6bcfa",
        400: "#b794f4",
        500: "#9f7aea",
        600: "#805ad5",
        700: "#6b46c1",
        800: "#553c9a",
        900: "#44337a",
      },
      pink: {
        100: "#fff5f7",
        200: "#fed7e2",
        300: "#fbb6ce",
        400: "#f687b3",
        500: "#ed64a6",
        600: "#d53f8c",
        700: "#b83280",
        800: "#97266d",
        900: "#702459",
      },
    },
    opacity: {
      0: "0",
      10: ".1",
      20: ".2",
      25: ".25",
      30: ".3",
      40: ".4",
      50: ".5",
      60: ".6",
      70: ".7",
      75: ".75",
      80: ".8",
      90: ".9",
      100: "1",
    },
    inset: {
      0: "0",
      auto: "auto",
      "1/2": "50%",
    },
    zIndex: {
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
      60: "60",
      70: "70",
      80: "80",
      90: "90",
      100: "100",
      auto: "auto",
    },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      inherit: "inherit",
      none: "none",
      2: "2 2 0%",
    },
    flexGrow: {
      0: 0,
      default: 2,
      1: 1,
    },
    flexShrink: {
      0: 0,
      default: 2,
      1: 1,
    },
    order: {
      first: "-9999",
      last: "9999",
      normal: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
    },
    gridTemplateColumns: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
      none: "none",
    },
    gridColumn: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
      "span-13": "span 13 / span 13",
      "span-14": "span 14 / span 14",
      "span-15": "span 15 / span 15",
      "span-16": "span 16 / span 16",
      full: "1 / -1",
    },
    gridColumnStart: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
      17: "17",
      auto: "auto",
    },
    gridColumnEnd: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
      17: "17",
      auto: "auto",
    },
    gridTemplateRows: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      none: "none",
    },
    gridRow: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      full: "1 / -1",
    },
    gridRowStart: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      auto: "auto",
    },
    gridRowEnd: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      auto: "auto",
    },
    gridAutoColumns: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)",
    },
    gridAutoRows: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)",
    },
    gap: {},
    padding: {},
    margin: {
      auto: "auto",
    },
    space: {},
    width: {
      auto: "auto",
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
    },
    minWidth: {
      0: "0",
      full: "100%",
      screen: "100vw",
    },
    maxWidth: {
      none: "none",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      full: "100%",
    },
    height: {
      auto: "auto",
      full: "100%",
      screen: "100vh",
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      screen: "100vh",
    },
    maxHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      screen: "100vh",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    fontWeight: {
      hairline: "100",
      thin: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    placeholderColor: {
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
    },
    placeholderOpacity: {},
    textColor: {
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
    },
    textOpacity: {},
    backgroundColor: {
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
    },
    backgroundOpacity: {},
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      16: "4rem",
    },
    backgroundImage: {
      none: "none",
      "gradient-to-t": "linear-gradient(to top, var(--gradient-color-stops))",
      "gradient-to-tr":
        "linear-gradient(to top right, var(--gradient-color-stops))",
      "gradient-to-r": "linear-gradient(to right, var(--gradient-color-stops))",
      "gradient-to-br":
        "linear-gradient(to bottom right, var(--gradient-color-stops))",
      "gradient-to-b":
        "linear-gradient(to bottom, var(--gradient-color-stops))",
      "gradient-to-bl":
        "linear-gradient(to bottom left, var(--gradient-color-stops))",
      "gradient-to-l": "linear-gradient(to left, var(--gradient-color-stops))",
      "gradient-to-tl":
        "linear-gradient(to top left, var(--gradient-color-stops))",
    },
    gradientColorStops: {
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      default: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
    },
    borderWidth: {
      default: "1px",
      0: "0",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    borderColor: {
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
    },
    borderOpacity: {},
    divideWidth: {},
    divideColor: {
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
    },
    divideOpacity: {},
    boxShadow: {
      xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      default:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none",
    },
    scale: {
      0: "0",
      25: ".25",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      0: "0",
      45: "45deg",
      90: "90deg",
      135: "135deg",
      180: "180deg",
      270: "270deg",
    },
    translate: {
      "1/2": "50%",
      full: "100%",
    },
    skew: {
      0: "0",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg",
    },
    transformOrigin: {
      center: "center",
      top: "top",
      "top-right": "top right",
      right: "right",
      "bottom-right": "bottom right",
      bottom: "bottom",
      "bottom-left": "bottom left",
      left: "left",
      "top-left": "top left",
    },
  },
};

export default configOptions;
