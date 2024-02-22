import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function GridTemplateColumns() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Grid Template Columns</h1>
      </div>
      <PanelSection title="Specifying the columns in a grid">
        <div
          className={`grid grid-cols-4 gap-4 font-mono text-white text-sm text-center font-bold leading-6 ${stripes.fuchsia} rounded-lg`}
        >
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">01</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">02</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">03</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">04</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">05</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">06</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">07</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">08</div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500">09</div>
        </div>
      </PanelSection>
      <PanelSection title="Subgrid">
        <div className="grid grid-cols-4 gap-4 rounded-lg text-center font-mono text-sm font-bold leading-6 text-white">
          <div className="rounded-lg bg-indigo-300 p-4 shadow-lg">01</div>
          <div className="rounded-lg bg-indigo-300 p-4 shadow-lg">02</div>
          <div className="rounded-lg bg-indigo-300 p-4 shadow-lg">03</div>
          <div className="rounded-lg bg-indigo-300 p-4 shadow-lg">04</div>
          <div className="rounded-lg bg-indigo-300 p-4 shadow-lg">05</div>
          <div className="col-span-3 grid grid-cols-subgrid gap-4">
            <div className={`rounded-lg ${stripes.pink} p-4`} />
            <div className="rounded-lg bg-pink-500 p-4 shadow-lg">06</div>
            <div className={`rounded-lg ${stripes.pink} p-4`} />
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
