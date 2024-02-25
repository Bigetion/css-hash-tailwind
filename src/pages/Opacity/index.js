import React from "react";

import PanelSection from "components/PanelSection";

export default function Opacity() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Opacity</h1>
      </div>
      <PanelSection title="Changing an element's opacity">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-white text-sm font-bold leading-6">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              opacity-100
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-indigo-500 text-white rounded-md shadow-sm opacity-100">
              Button A
            </button>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              opacity-75
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-indigo-500 text-white rounded-md shadow-sm opacity-75">
              Button B
            </button>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              opacity-50
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-indigo-500 text-white rounded-md shadow-sm opacity-50">
              Button C
            </button>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              opacity-25
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-indigo-500 text-white rounded-md shadow-sm opacity-25">
              Button D
            </button>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
