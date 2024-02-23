import React from "react";

import PanelSection from "components/PanelSection";

export default function BorderStyle() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Border Style</h1>
      </div>
      <PanelSection title="Setting the border style">
        <div className="flex flex-col sm:flex-row items-center justify-around gap-4 text-white text-sm text-center font-bold leading-6">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-solid
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 rounded-md shadow-sm ring-1 ring-slate-900 ring-opacity-5 border-indigo-500 border-2 border-solid">
              Button A
            </button>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-dashed
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 rounded-md shadow-sm ring-1 ring-slate-900 ring-opacity-5 border-indigo-500 border-2 border-dashed">
              Button A
            </button>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-dotted
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 rounded-md shadow-sm ring-1 ring-slate-900 ring-opacity-5 border-indigo-500 border-2 border-dotted">
              Button A
            </button>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              border-double
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 rounded-md shadow-sm ring-1 ring-slate-900 ring-opacity-5 border-indigo-500 border-4 border-double">
              Button A
            </button>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="No style">
        <div className="flex justify-center gap-4 text-white text-sm text-center font-bold leading-6">
          <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 rounded-md shadow-sm ring-1 ring-slate-900 ring-opacity-5 border-indigo-500 border-2 border-none">
            Save Changes
          </button>
        </div>
      </PanelSection>
    </div>
  );
}
