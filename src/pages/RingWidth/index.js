import React from "react";

import PanelSection from "components/PanelSection";

export default function RingWidth() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Ring Width</h1>
      </div>
      <PanelSection title="Adding a ring">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white text-center font-bold leading-6">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              ring-2
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-2 ring-offset-slate-50 ring-blue-300">
              Button A
            </button>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              ring
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring ring-offset-2 ring-offset-slate-50 ring-blue-300">
              Button B
            </button>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              ring-4
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-4 ring-offset-2 ring-offset-slate-50 ring-blue-300">
              Button C
            </button>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Focus rings">
        <div className="flex justify-center max-w-md mx-auto gap-4 text-white text-sm text-center font-bold leading-6">
          <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-violet-300 ring-offset-2 ring-offset-slate-50 focus:outline-none focus:ring-2">
            Save Changes
          </button>
        </div>
      </PanelSection>
      <PanelSection title="Inset rings">
        <div className="flex justify-center max-w-md mx-auto gap-4 text-white text-sm text-center font-bold leading-6">
          <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 rounded-md shadow-sm ring-pink-300 ring-2 ring-inset">
            Save Changes
          </button>
        </div>
      </PanelSection>
    </div>
  );
}
