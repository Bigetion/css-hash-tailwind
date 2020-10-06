const routes = [
  // -- APPEND ROUTES HERE --
  {
    id: "transformOrigin",
    path: "/transform-origin",
    exact: true,
    component: () => import("pages/TransformOrigin"),
  },
  {
    id: "skew",
    path: "/skew",
    exact: true,
    component: () => import("pages/Skew"),
  },
  {
    id: "translate",
    path: "/translate",
    exact: true,
    component: () => import("pages/Translate"),
  },
  {
    id: "rotate",
    path: "/rotate",
    exact: true,
    component: () => import("pages/Rotate"),
  },
  {
    id: "scale",
    path: "/scale",
    exact: true,
    component: () => import("pages/Scale"),
  },
  {
    id: "userSelect",
    path: "/user-select",
    exact: true,
    component: () => import("pages/UserSelect"),
  },
  {
    id: "resize",
    path: "/resize",
    exact: true,
    component: () => import("pages/Resize"),
  },
  {
    id: "pointerEvents",
    path: "/pointer-events",
    exact: true,
    component: () => import("pages/PointerEvents"),
  },
  {
    id: "outline",
    path: "/outline",
    exact: true,
    component: () => import("pages/Outline"),
  },
  {
    id: "cursor",
    path: "/cursor",
    exact: true,
    component: () => import("pages/Cursor"),
  },
  {
    id: "appearance",
    path: "/appearance",
    exact: true,
    component: () => import("pages/Appearance"),
  },
  {
    id: "opacity",
    path: "/opacity",
    exact: true,
    component: () => import("pages/Opacity"),
  },
  {
    id: "boxShadow",
    path: "/box-shadow",
    exact: true,
    component: () => import("pages/BoxShadow"),
  },
  {
    id: "tableLayout",
    path: "/table-layout",
    exact: true,
    component: () => import("pages/TableLayout"),
  },
  {
    id: "borderCollapse",
    path: "/border-collapse",
    exact: true,
    component: () => import("pages/BorderCollapse"),
  },
  {
    id: "borderStyle",
    path: "/border-style",
    exact: true,
    component: () => import("pages/BorderStyle"),
  },
  {
    id: "borderOpacity",
    path: "/border-opacity",
    exact: true,
    component: () => import("pages/BorderOpacity"),
  },
  {
    id: "borderColor",
    path: "/border-color",
    exact: true,
    component: () => import("pages/BorderColor"),
  },
  {
    id: "borderWidth",
    path: "/border-width",
    exact: true,
    component: () => import("pages/BorderWidth"),
  },
  {
    id: "borderRadius",
    path: "/border-radius",
    exact: true,
    component: () => import("pages/BorderRadius"),
  },
  {
    id: "divideStyle",
    path: "/divide-style",
    exact: true,
    component: () => import("pages/DivideStyle"),
  },
  {
    id: "divideOpacity",
    path: "/divide-opacity",
    exact: true,
    component: () => import("pages/DivideOpacity"),
  },
  {
    id: "divideColor",
    path: "/divide-color",
    exact: true,
    component: () => import("pages/DivideColor"),
  },
  {
    id: "divideWidth",
    path: "/divide-width",
    exact: true,
    component: () => import("pages/DivideWidth"),
  },
  {
    id: "gradientColorStops",
    path: "/gradient-color-stops",
    exact: true,
    component: () => import("pages/GradientColorStops"),
  },
  {
    id: "backgroundImage",
    path: "/background-image",
    exact: true,
    component: () => import("pages/BackgroundImage"),
  },
  {
    id: "backgroundSize",
    path: "/background-size",
    exact: true,
    component: () => import("pages/BackgroundSize"),
  },
  {
    id: "backgroundRepeat",
    path: "/background-repeat",
    exact: true,
    component: () => import("pages/BackgroundRepeat"),
  },
  {
    id: "backgroundPosition",
    path: "/background-position",
    exact: true,
    component: () => import("pages/BackgroundPosition"),
  },
  {
    id: "backgroundOpacity",
    path: "/background-opacity",
    exact: true,
    component: () => import("pages/BackgroundOpacity"),
  },
  {
    id: "backgroundColor",
    path: "/background-color",
    exact: true,
    component: () => import("pages/BackgroundColor"),
  },
  {
    id: "backgroundClip",
    path: "/background-clip",
    exact: true,
    component: () => import("pages/BackgroundClip"),
  },
  {
    id: "backgroundAttachment",
    path: "/background-attachment",
    exact: true,
    component: () => import("pages/BackgroundAttachment"),
  },
  {
    id: "wordBreak",
    path: "/word-break",
    exact: true,
    component: () => import("pages/WordBreak"),
  },
  {
    id: "whitespace",
    path: "/whitespace",
    exact: true,
    component: () => import("pages/Whitespace"),
  },
  {
    id: "verticalAlign",
    path: "/vertical-align",
    exact: true,
    component: () => import("pages/VerticalAlign"),
  },
  {
    id: "textTransform",
    path: "/text-transform",
    exact: true,
    component: () => import("pages/TextTransform"),
  },
  {
    id: "textDecoration",
    path: "/text-decoration",
    exact: true,
    component: () => import("pages/TextDecoration"),
  },
  {
    id: "textOpacity",
    path: "/text-opacity",
    exact: true,
    component: () => import("pages/TextOpacity"),
  },
  {
    id: "textColor",
    path: "/text-color",
    exact: true,
    component: () => import("pages/TextColor"),
  },
  {
    id: "textAlign",
    path: "/text-align",
    exact: true,
    component: () => import("pages/TextAlign"),
  },
  {
    id: "placeholderOpacity",
    path: "/placeholder-opacity",
    exact: true,
    component: () => import("pages/PlaceholderOpacity"),
  },
  {
    id: "placeholderColor",
    path: "/placeholder-color",
    exact: true,
    component: () => import("pages/PlaceholderColor"),
  },
  {
    id: "listStylePosition",
    path: "/list-style-position",
    exact: true,
    component: () => import("pages/ListStylePosition"),
  },
  {
    id: "listStyleType",
    path: "/list-style-type",
    exact: true,
    component: () => import("pages/ListStyleType"),
  },
  {
    id: "lineHeight",
    path: "/line-height",
    exact: true,
    component: () => import("pages/LineHeight"),
  },
  {
    id: "letterSpacing",
    path: "/letter-spacing",
    exact: true,
    component: () => import("pages/LetterSpacing"),
  },
  {
    id: "fontWeight",
    path: "/font-weight",
    exact: true,
    component: () => import("pages/FontWeight"),
  },
  {
    id: "fontStyle",
    path: "/font-style",
    exact: true,
    component: () => import("pages/FontStyle"),
  },
  {
    id: "fontSmoothing",
    path: "/font-smoothing",
    exact: true,
    component: () => import("pages/FontSmoothing"),
  },
  {
    id: "fontSize",
    path: "/font-size",
    exact: true,
    component: () => import("pages/FontSize"),
  },
  {
    id: "maxHeight",
    path: "/max-height",
    exact: true,
    component: () => import("pages/MaxHeight"),
  },
  {
    id: "minHeight",
    path: "/min-height",
    exact: true,
    component: () => import("pages/MinHeight"),
  },
  {
    id: "height",
    path: "/height",
    exact: true,
    component: () => import("pages/Height"),
  },
  {
    id: "maxWidth",
    path: "/max-width",
    exact: true,
    component: () => import("pages/MaxWidth"),
  },
  {
    id: "minWidth",
    path: "/min-width",
    exact: true,
    component: () => import("pages/MinWidth"),
  },
  {
    id: "width",
    path: "/width",
    exact: true,
    component: () => import("pages/Width"),
  },
  {
    id: "spaceBetween",
    path: "/space-between",
    exact: true,
    component: () => import("pages/SpaceBetween"),
  },
  {
    id: "margin",
    path: "/margin",
    exact: true,
    component: () => import("pages/Margin"),
  },
  {
    id: "padding",
    path: "/padding",
    exact: true,
    component: () => import("pages/Padding"),
  },
  {
    id: "placeSelf",
    path: "/place-self",
    exact: true,
    component: () => import("pages/PlaceSelf"),
  },
  {
    id: "placeItems",
    path: "/place-items",
    exact: true,
    component: () => import("pages/PlaceItems"),
  },
  {
    id: "placeContent",
    path: "/place-content",
    exact: true,
    component: () => import("pages/PlaceContent"),
  },
  {
    id: "alignSelf",
    path: "/align-self",
    exact: true,
    component: () => import("pages/AlignSelf"),
  },
  {
    id: "alignItems",
    path: "/align-items",
    exact: true,
    component: () => import("pages/AlignItems"),
  },
  {
    id: "alignContent",
    path: "/align-content",
    exact: true,
    component: () => import("pages/AlignContent"),
  },
  {
    id: "justifySelf",
    path: "/justify-self",
    exact: true,
    component: () => import("pages/JustifySelf"),
  },
  {
    id: "justifyItems",
    path: "/justify-items",
    exact: true,
    component: () => import("pages/JustifyItems"),
  },
  {
    id: "justifyContent",
    path: "/justify-content",
    exact: true,
    component: () => import("pages/JustifyContent"),
  },
  {
    id: "gap",
    path: "/gap",
    exact: true,
    component: () => import("pages/Gap"),
  },
  {
    id: "gridAutoFlow",
    path: "/grid-auto-flow",
    exact: true,
    component: () => import("pages/GridAutoFlow"),
  },
  {
    id: "gridRowStartEnd",
    path: "/grid-row-start-end",
    exact: true,
    component: () => import("pages/GridRowStartEnd"),
  },
  {
    id: "gridTemplateRows",
    path: "/grid-template-rows",
    exact: true,
    component: () => import("pages/GridTemplateRows"),
  },
  {
    id: "gridColumnStartEnd",
    path: "/grid-column-start-end",
    exact: true,
    component: () => import("pages/GridColumnStartEnd"),
  },
  {
    id: "gridTemplateColumns",
    path: "/grid-template-columns",
    exact: true,
    component: () => import("pages/GridTemplateColumns"),
  },
  {
    id: "order",
    path: "/order",
    exact: true,
    component: () => import("pages/Order"),
  },
  {
    id: "flexShrink",
    path: "/flex-shrink",
    exact: true,
    component: () => import("pages/FlexShrink"),
  },
  {
    id: "flexGrow",
    path: "/flex-grow",
    exact: true,
    component: () => import("pages/FlexGrow"),
  },
  {
    id: "flex",
    path: "/flex",
    exact: true,
    component: () => import("pages/Flex"),
  },
  {
    id: "flexWrap",
    path: "/flex-wrap",
    exact: true,
    component: () => import("pages/FlexWrap"),
  },
  {
    id: "flexDirection",
    path: "/flex-direction",
    exact: true,
    component: () => import("pages/FlexDirection"),
  },
  {
    id: "zIndex",
    path: "/z-index",
    exact: true,
    component: () => import("pages/ZIndex"),
  },
  {
    id: "visibility",
    path: "/visibility",
    exact: true,
    component: () => import("pages/Visibility"),
  },
  {
    id: "topRightBottomLeft",
    path: "/top-right-bottom-left",
    exact: true,
    component: () => import("pages/TopRightBottomLeft"),
  },
  {
    id: "position",
    path: "/position",
    exact: true,
    component: () => import("pages/Position"),
  },
  {
    id: "overscrollBehavior",
    path: "/overscroll-behavior",
    exact: true,
    component: () => import("pages/OverscrollBehavior"),
  },
  {
    id: "overflow",
    path: "/overflow",
    exact: true,
    component: () => import("pages/Overflow"),
  },
  {
    id: "objectPosition",
    path: "/object-position",
    exact: true,
    component: () => import("pages/ObjectPosition"),
  },
  {
    id: "objectFit",
    path: "/object-fit",
    exact: true,
    component: () => import("pages/ObjectFit"),
  },
  {
    id: "clear",
    path: "/clear",
    exact: true,
    component: () => import("pages/Clear"),
  },
  {
    id: "floats",
    path: "/floats",
    exact: true,
    component: () => import("pages/Floats"),
  },
  {
    id: "display",
    path: "/display",
    exact: true,
    component: () => import("pages/Display"),
  },
  {
    id: "boxSizing",
    path: "/box-sizing",
    exact: true,
    component: () => import("pages/BoxSizing"),
  },
  {
    id: "home",
    path: "/",
    exact: true,
    component: () => import("pages/Home"),
  },
  {
    id: "404",
    path: "*",
    exact: false,
    component: () => import("pages/404"),
  },
];

export default routes;
