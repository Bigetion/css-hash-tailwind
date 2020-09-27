import React from "react";
import { Link, useLocation } from "react-router-dom";

import { cssHash, classNames } from "css-hash";

const sidebarClass = cssHash(
  (className) => `
    html {
      line-height: 1.5;
      font-family: Inter, sans-serif;
    }
    .${className} {
      height: calc(100vh - 4rem) !important;
    }
  `
);

function Menu({ title, items }) {
  const location = useLocation();
  const { pathname = "" } = location;

  return (
    <div className="mb-8">
      <h5 className="mb-3 lg:mb-2 uppercase tracking-wide font-bold text-sm lg:text-xs text-gray-500">
        {title}
      </h5>
      <ul>
        {items.map((item, index) => {
          const path = `/${item.label.toLowerCase().split(" ").join("-")}`;
          const isActive = pathname === path;
          return (
            <li key={index} className="mb-3 lg:mb-1">
              <Link
                className={classNames(
                  "px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block",
                  isActive
                    ? "text-teal-600 "
                    : "hover:translate-x-2px hover:text-gray-900 text-gray-600",
                  "font-medium"
                )}
                to={path}
              >
                <span
                  className={classNames(
                    "rounded absolute inset-0 bg-teal-200",
                    isActive ? "opacity-25" : "opacity-0"
                  )}
                ></span>
                <span className="relative">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Layout(props) {
  const { children } = props;
  const menus = [
    {
      title: "Layout",
      items: [
        { label: "Box Sizing" },
        { label: "Display" },
        { label: "Floats" },
        { label: "Clear" },
        { label: "Object Fit" },
        { label: "Object Position" },
        { label: "Overflow" },
        { label: "Overscroll Behavior" },
        { label: "Position" },
        { label: "Top Right Bottom Left" },
        { label: "Visibility" },
        { label: "Z-Index" },
      ],
    },
    {
      title: "Flexbox",
      items: [
        { label: "Flex Direction" },
        { label: "Flex Wrap" },
        { label: "Flex" },
        { label: "Flex Grow" },
        { label: "Flex Shrink" },
        { label: "Order" },
      ],
    },
    {
      title: "Box Alignment",
      items: [
        { label: "Justify Content" },
        { label: "Justify Items" },
        { label: "Justify Self" },
        { label: "Align Content" },
        { label: "Align Items" },
        { label: "Align Self" },
        { label: "Place Content" },
        { label: "Place Items" },
        { label: "Place Self" },
      ],
    },
    {
      title: "Spacing",
      items: [
        { label: "Padding" },
        { label: "Margin" },
        { label: "Space Between" },
      ],
    },
  ];
  return (
    <React.Fragment>
      <div className="bg-white antialiased">
        <div className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
          <div className="w-full max-w-screen-xl relative mx-auto px-6">
            <div className="flex items-center -mx-6">
              <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
                <div className="flex items-center">
                  <a className="block lg:mr-4" href="/">
                    <svg
                      className="w-auto hidden md:block h-10"
                      viewBox="0 0 273 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Tailwind CSS</title>
                      <path
                        fill="#14B4C6"
                        d="M32 16c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C35.744 29.09 38.808 32.2 45.5 32.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C41.756 19.11 38.692 16 32 16zM18.5 32.2C11.3 32.2 6.8 35.8 5 43c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C22.244 45.29 25.308 48.4 32 48.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C28.256 35.31 25.192 32.2 18.5 32.2z"
                      ></path>
                      <path
                        fill="#000"
                        d="M85.996 29.652h-4.712v9.12c0 2.432 1.596 2.394 4.712 2.242V44.7c-6.308.76-8.816-.988-8.816-5.928v-9.12h-3.496V25.7h3.496v-5.104l4.104-1.216v6.32h4.712v3.952zm17.962-3.952h4.104v19h-4.104v-2.736c-1.444 2.014-3.686 3.23-6.65 3.23-5.168 0-9.462-4.37-9.462-9.994 0-5.662 4.294-9.994 9.462-9.994 2.964 0 5.206 1.216 6.65 3.192V25.7zm-6.004 15.58c3.42 0 6.004-2.546 6.004-6.08 0-3.534-2.584-6.08-6.004-6.08-3.42 0-6.004 2.546-6.004 6.08 0 3.534 2.584 6.08 6.004 6.08zm16.948-18.43c-1.444 0-2.622-1.216-2.622-2.622a2.627 2.627 0 012.622-2.622 2.627 2.627 0 012.622 2.622c0 1.406-1.178 2.622-2.622 2.622zM112.85 44.7v-19h4.104v19h-4.104zm8.854 0V16.96h4.104V44.7h-4.104zm30.742-19h4.332l-5.966 19h-4.028l-3.952-12.806-3.99 12.806h-4.028l-5.966-19h4.332l3.686 13.11 3.99-13.11h3.914l3.952 13.11 3.724-13.11zm9.424-2.85c-1.444 0-2.622-1.216-2.622-2.622a2.627 2.627 0 012.622-2.622 2.627 2.627 0 012.622 2.622c0 1.406-1.178 2.622-2.622 2.622zm-2.052 21.85v-19h4.104v19h-4.104zm18.848-19.494c4.256 0 7.296 2.888 7.296 7.828V44.7h-4.104V33.452c0-2.888-1.672-4.408-4.256-4.408-2.698 0-4.826 1.596-4.826 5.472V44.7h-4.104v-19h4.104v2.432c1.254-1.976 3.306-2.926 5.89-2.926zm26.752-7.106h4.104v26.6h-4.104v-2.736c-1.444 2.014-3.686 3.23-6.65 3.23-5.168 0-9.462-4.37-9.462-9.994 0-5.662 4.294-9.994 9.462-9.994 2.964 0 5.206 1.216 6.65 3.192V18.1zm-6.004 23.18c3.42 0 6.004-2.546 6.004-6.08 0-3.534-2.584-6.08-6.004-6.08-3.42 0-6.004 2.546-6.004 6.08 0 3.534 2.584 6.08 6.004 6.08zm23.864 3.914c-5.738 0-10.032-4.37-10.032-9.994 0-5.662 4.294-9.994 10.032-9.994 3.724 0 6.954 1.938 8.474 4.902l-3.534 2.052c-.836-1.786-2.698-2.926-4.978-2.926-3.344 0-5.89 2.546-5.89 5.966 0 3.42 2.546 5.966 5.89 5.966 2.28 0 4.142-1.178 5.054-2.926l3.534 2.014c-1.596 3.002-4.826 4.94-8.55 4.94zm15.314-14.25c0 3.458 10.222 1.368 10.222 8.398 0 3.8-3.306 5.852-7.41 5.852-3.8 0-6.536-1.71-7.752-4.446l3.534-2.052c.608 1.71 2.128 2.736 4.218 2.736 1.824 0 3.23-.608 3.23-2.128 0-3.382-10.222-1.482-10.222-8.284 0-3.572 3.078-5.814 6.954-5.814 3.116 0 5.7 1.444 7.03 3.952l-3.458 1.938c-.684-1.482-2.014-2.166-3.572-2.166-1.482 0-2.774.646-2.774 2.014zm17.518 0c0 3.458 10.222 1.368 10.222 8.398 0 3.8-3.306 5.852-7.41 5.852-3.8 0-6.536-1.71-7.752-4.446l3.534-2.052c.608 1.71 2.128 2.736 4.218 2.736 1.824 0 3.23-.608 3.23-2.128 0-3.382-10.222-1.482-10.222-8.284 0-3.572 3.078-5.814 6.954-5.814 3.116 0 5.7 1.444 7.03 3.952l-3.458 1.938c-.684-1.482-2.014-2.166-3.572-2.166-1.482 0-2.774.646-2.774 2.014z"
                      ></path>
                    </svg>
                    <svg
                      className="w-10 h-10 block md:hidden"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Tailwind CSS</title>
                      <path
                        fill="#14B4C6"
                        d="M32 16.3c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C35.744 29.39 38.808 32.5 45.5 32.5c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C41.756 19.41 38.692 16.3 32 16.3zM18.5 32.5c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C22.244 45.59 25.308 48.7 32 48.7c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C28.256 35.61 25.192 32.5 18.5 32.5z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-grow min-w-0 lg:w-3/4 xl:w-4/5"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto px-6">
        <div className="lg:flex -mx-6">
          <div className="fixed inset-0 h-full bg-white z-90 w-full border-b border-r -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block xl:w-1/5 hidden pt-16">
            <div className="overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-16 bg-white">
              <div
                className={`px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 ${sidebarClass}`}
              >
                {menus.map((item, index) => (
                  <Menu key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
          <div className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
            <div>
              <div className="flex">
                <div className="pb-16 w-full pt-24 lg:pt-28">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Layout;
