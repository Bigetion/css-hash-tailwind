import React from "react";

import PanelSection from "components/PanelSection";

export default function ZIndex() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Z Index</h1>
      </div>
      <PanelSection title="Usage">
        <div className="flex justify-center -space-x-3 font-mono text-white text-sm font-bold leading-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-40 dark:ring-slate-900">
            05
          </div>
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-30 dark:ring-slate-900">
            04
          </div>
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-20 dark:ring-slate-900">
            03
          </div>
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-10 dark:ring-slate-900">
            02
          </div>
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-0 dark:ring-slate-900">
            01
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
