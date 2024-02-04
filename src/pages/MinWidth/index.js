import React from "react";

import PanelSection from "components/PanelSection";

export default function MinWidth() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Min Width</h1>
      </div>
      <PanelSection title="Setting the minimum width">
        <div className="grid w-96 mx-auto font-mono font-bold text-xs text-center text-white justify-items-start gap-y-4">
          <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg min-w-80">
            min-w-80
          </div>
          <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg min-w-64">
            min-w-64
          </div>
          <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg min-w-48">
            min-w-48
          </div>
          <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg min-w-40">
            min-w-40
          </div>
          <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg min-w-32">
            min-w-32
          </div>
          <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg min-w-24">
            min-w-24
          </div>
          <div className="px-4 py-2 bg-blue-500 rounded-lg shadow-lg min-w-full">
            min-w-full
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
