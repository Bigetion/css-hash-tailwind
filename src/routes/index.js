const routes = [
  // -- APPEND ROUTES HERE --
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
