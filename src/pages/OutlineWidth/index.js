import React from "react";

import PanelSection from "components/PanelSection";

export default function OutlineWidth() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Outline Width</h1>
      </div>
      <PanelSection title="Setting the outline width">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 font-bold text-white text-sm text-center">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              outline-1
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm outline outline-1 outline-offset-2 outline-blue-500">
              Button A
            </button>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              outline-2
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm outline outline-2 outline-offset-2 outline-blue-500">
              Button B
            </button>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              outline-4
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm outline outline-4 outline-offset-2 outline-blue-500">
              Button C
            </button>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
