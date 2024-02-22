import React from "react";

import PanelSection from "components/PanelSection";

export default function BackgroundColor() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Background Color</h1>
      </div>
      <PanelSection title="Setting the background color">
        <div className="text-center">
          <button
            type="button"
            className="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
            tabindex="-1"
          >
            Save changes
          </button>
        </div>
      </PanelSection>
      <PanelSection title="Changing the opacity">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-sm text-white">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              bg-sky-500
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100 focus:outline-none">
              Button A
            </button>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              bg-sky-500 bg-opacity-75
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-sky-500 bg-opacity-75 text-white rounded-md shadow-sm opacity-100 focus:outline-none">
              Button B
            </button>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              bg-sky-500 bg-opacity-50
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-sky-500 bg-opacity-50 text-white rounded-md shadow-sm opacity-100 focus:outline-none">
              Button C
            </button>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Hover, focus, and other states">
        <div className="text-center">
          <button
            type="button"
            className="py-2 px-3 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
            tabindex="-1"
          >
            Subscribe
          </button>
        </div>
      </PanelSection>
    </div>
  );
}
