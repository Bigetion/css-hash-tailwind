const routes = [
  // -- APPEND ROUTES HERE --
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
