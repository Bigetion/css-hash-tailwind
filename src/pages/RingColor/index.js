import React from "react";

import PanelSection from "components/PanelSection";

export default function RingColor() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Ring Color</h1>
      </div>
      <PanelSection title="Setting the ring color">
        <div className="flex justify-center max-w-md mx-auto gap-4 text-white text-sm text-center font-bold leading-6">
          <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-2 ring-offset-slate-50 ring-blue-500">
            Create account
          </button>
        </div>
      </PanelSection>
      <PanelSection title="Changing the opacity">
        <div className="flex justify-center max-w-md mx-auto gap-4 text-white text-sm text-center font-bold leading-6">
          <button className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-2 ring-offset-slate-50 ring-blue-500 ring-opacity-50">
            Create account
          </button>
        </div>
      </PanelSection>
    </div>
  );
}
