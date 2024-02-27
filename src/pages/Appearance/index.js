import React from "react";

import PanelSection from "components/PanelSection";

export default function Appearance() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Appearance</h1>
      </div>
      <PanelSection title="Removing default element appearance">
        <div className="max-w-sm mx-auto items-center">
          <div className="flex my-6">
            <select className="w-20">
              <option>Yes</option>
              <option>No</option>
              <option>Maybe</option>
            </select>
            <div className="mx-6 text-slate-900 text-sm font-semibold">
              Default browser styles applied
            </div>
          </div>
          <div className="flex my-6 items-center">
            <div className="grid">
              <svg
                className="pointer-events-none z-10 right-1 relative col-start-1 row-start-1 h-4 w-4 self-center justify-self-end forced-colors:hidden"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
              <select className="w-20 appearance-none forced-colors:appearance-auto border row-start-1 col-start-1 rounded-lg bg-slate-50 hover:border-cyan-500 hover:bg-white border-slate-300 px-2">
                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
              </select>
            </div>
            <div className="mx-6 text-slate-900 text-sm font-semibold">
              Remove default browser styles
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
