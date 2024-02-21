import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function MaxWidth() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Max Width</h1>
      </div>
      <PanelSection title="Setting the maximum widths">
        <div className="grid gap-4 font-mono font-bold text-xs text-center text-white align-start">
          <div className={`grid ${stripes.blue} w-full rounded-lg`}>
            <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg max-w-96">
              max-w-96
            </div>
          </div>
          <div className={`grid ${stripes.blue} w-full rounded-lg`}>
            <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg max-w-80">
              max-w-80
            </div>
          </div>
          <div className={`grid ${stripes.blue} w-full rounded-lg`}>
            <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg max-w-64">
              max-w-64
            </div>
          </div>
          <div className={`grid ${stripes.blue} w-full rounded-lg`}>
            <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg max-w-48">
              max-w-48
            </div>
          </div>
          <div className={`grid ${stripes.blue} w-full rounded-lg`}>
            <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg max-w-40">
              max-w-40
            </div>
          </div>
          <div className={`grid ${stripes.blue} w-full rounded-lg`}>
            <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg max-w-32">
              max-w-32
            </div>
          </div>
          <div className={`grid ${stripes.blue} w-full rounded-lg`}>
            <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg max-w-24">
              max-w-24
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
