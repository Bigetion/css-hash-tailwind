import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function GridAutoFlow() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Grid Auto Flow</h1>
      </div>
      <PanelSection title="Controlling grid element placement">
        <div
          className={`grid grid-cols-3 grid-rows-3 grid-flow-row-dense gap-4 font-mono text-white text-sm text-center font-bold leading-6 ${stripes.purple} rounded-lg`}
        >
          <div className="p-4 col-span-2 rounded-lg bg-purple-300">01</div>
          <div className="p-4 col-span-2 rounded-lg bg-purple-300">02</div>
          <div className="p-4 rounded-lg shadow-lg bg-purple-500">03</div>
          <div className="p-4 rounded-lg bg-purple-300">04</div>
          <div className="p-4 rounded-lg bg-purple-300">05</div>
        </div>
      </PanelSection>
    </div>
  );
}
