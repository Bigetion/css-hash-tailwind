import React from "react";

import PanelSection from "components/PanelSection";

export default function OutlineStyle() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Outline Style</h1>
      </div>
      <PanelSection title="Setting the outline style">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-white text-sm font-semibold text-center">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              outline
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm outline outline-2 outline-offset-2 outline-indigo-500">
              Button A
            </button>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              outline-dashed
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm outline-dashed outline-2 outline-offset-2 outline-indigo-500">
              Button B
            </button>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              outline-dotted
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm outline-dotted outline-2 outline-offset-2 outline-indigo-500">
              Button C
            </button>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              outline-double
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm outline-double outline-3 outline-offset-2 outline-indigo-500">
              Button D
            </button>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Removing outlines">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-16 gap-y-8 px-0 sm:px-10 font-mono font-bold">
          <input
            type="text"
            placeholder="Default focus styles"
            className="font-sans block text-sm w-full py-2 px-3 ring-1 ring-slate-900 ring-opacity-10 text-slate-500 rounded-lg shadow-sm"
          />
          <input
            type="text"
            placeholder="Custom focus styles"
            className="font-sans block text-sm w-full py-2 px-3 ring-1 ring-slate-900 ring-opacity-10 text-slate-500 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500"
          />
        </div>
      </PanelSection>
    </div>
  );
}
