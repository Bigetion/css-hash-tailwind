import React from "react";

import PanelSection from "components/PanelSection";

export default function PointerEvents() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Pointer Events</h1>
      </div>
      <PanelSection title="Controlling pointer event behavior">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-0 sm:px-10 font-mono font-bold">
          <div className="flex flex-col">
            <p className="font-medium text-sm text-slate-500 font-mono mb-3">
              pointer-events-auto
            </p>
            <div className="relative rounded-lg shadow-sm w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">
                <svg
                  className="absolute text-slate-400 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="font-sans block text-sm w-full pl-10 py-2 px-3 ring-1 ring-slate-900 ring-opacity-10 text-slate-500 rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-sm text-slate-500 font-mono mb-3">
              pointer-events-none
            </p>
            <div className="relative rounded-lg shadow-sm w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="absolute text-slate-400 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="font-sans block text-sm w-full pl-10 py-2 px-3 ring-1 ring-slate-900 ring-opacity-10 text-slate-500 rounded-lg"
              />
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
