import React from "react";

import PanelSection from "components/PanelSection";

export default function PointerEvents() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Pointer Events</h1>
      </div>
      <PanelSection title="Usage">
        <div className="">
          <div className="max-w-sm">
            <p className="text-sm text-gray-700">
              Try clicking the caret icon to open the dropdown
            </p>

            <p className="text-sm text-gray-600 my-4">
              .pointer-events-auto (event captured)
            </p>
            <div className="relative">
              <select className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>Indiana</option>
                <option>Michigan</option>
                <option>Ohio</option>
              </select>
              <div className="absolute flex inset-y-0 items-center px-3 right-0 text-gray-700 bg-gray-300 rounded-r pointer-events-auto">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                </svg>
              </div>
            </div>

            <p className="text-sm text-gray-600 my-4">
              .pointer-events-none (event passes through)
            </p>
            <div className="relative">
              <select className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>Indiana</option>
                <option>Michigan</option>
                <option>Ohio</option>
              </select>
              <div className="absolute flex inset-y-0 items-center px-3 right-0 text-gray-700 bg-gray-300 rounded-r pointer-events-none">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
