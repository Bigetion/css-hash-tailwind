import React from "react";

import PanelSection from "components/PanelSection";

export default function RingOffsetColor() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Ring Offset Color</h1>
      </div>
      <PanelSection title="Setting the ring offset color">
        <div className="grid place-content-center text-white text-sm text-center font-bold leading-6">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm font-mono text-slate-500 text-center mb-3">
              <span>ring-offset-purple-500</span>
            </p>
            <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-4 ring-purple-500">
              Save Changes
            </button>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
