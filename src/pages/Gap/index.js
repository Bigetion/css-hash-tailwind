import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function Gap() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Gap</h1>
      </div>
      <PanelSection title="Setting the gap between elements">
        <div
          className={`grid grid-cols-2 gap-4 font-mono text-white text-sm text-center font-bold leading-6 ${stripes.violet} rounded-lg`}
        >
          <div className="p-4 rounded-lg shadow-lg bg-violet-500">01</div>
          <div className="p-4 rounded-lg shadow-lg bg-violet-500">02</div>
          <div className="p-4 rounded-lg shadow-lg bg-violet-500">03</div>
          <div className="p-4 rounded-lg shadow-lg bg-violet-500">04</div>
        </div>
      </PanelSection>
      <PanelSection title="Changing row and column gaps independently">
        <div
          className={`grid grid-cols-3 gap-x-8 gap-y-4 font-mono text-white text-sm text-center font-bold leading-6 ${stripes.sky} rounded-lg`}
        >
          <div className="p-4 rounded-lg shadow-lg bg-sky-500">01</div>
          <div className="p-4 rounded-lg shadow-lg bg-sky-500">02</div>
          <div className="p-4 rounded-lg shadow-lg bg-sky-500">03</div>
          <div className="p-4 rounded-lg shadow-lg bg-sky-500">04</div>
          <div className="p-4 rounded-lg shadow-lg bg-sky-500">05</div>
          <div className="p-4 rounded-lg shadow-lg bg-sky-500">06</div>
        </div>
      </PanelSection>
    </div>
  );
}
