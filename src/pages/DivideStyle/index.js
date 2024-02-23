import React from "react";

import PanelSection from "components/PanelSection";

export default function DivideStyle() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Divide Style</h1>
      </div>
      <PanelSection title="Setting the divide style" paddingless>
        <div className="grid grid-cols-1 divide-dashed divide-y font-mono text-sm text-center font-bold leading-6 shadow-lg overflow-hidden max-w-sm mx-auto">
          <div className="p-4 text-slate-400 bg-white">01</div>
          <div className="p-4 text-slate-400 bg-white">02</div>
          <div className="p-4 text-slate-400 bg-white">03</div>
        </div>
      </PanelSection>
    </div>
  );
}
