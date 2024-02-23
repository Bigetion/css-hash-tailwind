import React from "react";

import PanelSection from "components/PanelSection";

export default function DivideColor() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Divide Color</h1>
      </div>
      <PanelSection title="Setting the divide color" paddingless>
        <div className="grid grid-cols-1 divide-y divide-blue-200 font-mono text-white text-sm text-center font-bold leading-6 shadow-lg overflow-hidden max-w-sm mx-auto">
          <div className="p-4 text-blue-500 bg-white">01</div>
          <div className="p-4 text-blue-500 bg-white">02</div>
          <div className="p-4 text-blue-500 bg-white">03</div>
        </div>
      </PanelSection>
      <PanelSection title="Changing the opacity" paddingless>
        <div className="grid grid-cols-1 divide-y-4 divide-slate-400 divide-opacity-25 font-mono text-white text-sm text-center font-bold leading-6 shadow-lg overflow-hidden max-w-sm mx-auto">
          <div className="p-4 text-slate-400 bg-white">01</div>
          <div className="p-4 text-slate-400 bg-white">02</div>
          <div className="p-4 text-slate-400 bg-white">03</div>
        </div>
      </PanelSection>
    </div>
  );
}
