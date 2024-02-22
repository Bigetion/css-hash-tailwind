import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function GridTemplateRows() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Grid Template Rows</h1>
      </div>
      <PanelSection title="Specifying the rows in a grid">
        <div
          className={`grid grid-rows-4 grid-flow-col gap-4 font-mono text-white text-sm text-center font-bold leading-6 ${stripes.pink} rounded-lg`}
        >
          <div className="p-4 rounded-lg shadow-lg bg-pink-500">01</div>
          <div className="p-4 rounded-lg shadow-lg bg-pink-500">02</div>
          <div className="p-4 rounded-lg shadow-lg bg-pink-500">03</div>
          <div className="p-4 rounded-lg shadow-lg bg-pink-500">04</div>
          <div className="p-4 rounded-lg shadow-lg bg-pink-500">05</div>
          <div className="p-4 rounded-lg shadow-lg bg-pink-500">06</div>
          <div className="p-4 rounded-lg shadow-lg bg-pink-500">07</div>
          <div className="p-4 rounded-lg shadow-lg bg-pink-500">08</div>
          <div className="p-4 rounded-lg shadow-lg bg-pink-500">09</div>
        </div>
      </PanelSection>
      <PanelSection title="Subgrid">
        <div className="grid grid-rows-4 grid-flow-col gap-4 rounded-lg text-center font-mono text-sm font-bold leading-6 text-white">
          <div className="rounded-lg bg-indigo-300 grid items-center justify-center h-14 shadow-lg">
            01
          </div>
          <div className="rounded-lg bg-indigo-300 grid items-center justify-center h-14 shadow-lg">
            02
          </div>
          <div className="rounded-lg bg-indigo-300 grid items-center justify-center h-14 shadow-lg">
            03
          </div>
          <div className="rounded-lg bg-indigo-300 grid items-center justify-center h-14 shadow-lg">
            04
          </div>
          <div className="rounded-lg bg-indigo-300 grid items-center justify-center h-14 shadow-lg">
            05
          </div>
          <div className="row-span-3 grid grid-rows-subgrid gap-4">
            <div className={`rounded-lg ${stripes.fuchsia} h-14`} />
            <div className="rounded-lg bg-fuchsia-500 grid items-center justify-center h-14 shadow-lg">
              06
            </div>
            <div className={`rounded-lg ${stripes.fuchsia} h-14`} />
          </div>
          <div className="rounded-lg bg-indigo-300 grid items-center justify-center h-14 shadow-lg">
            07
          </div>
          <div className="rounded-lg bg-indigo-300 grid items-center justify-center h-14 shadow-lg">
            08
          </div>
          <div className="rounded-lg bg-indigo-300 grid items-center justify-center h-14 shadow-lg">
            09
          </div>
          <div className="rounded-lg bg-indigo-300 grid items-center justify-center h-14 shadow-lg">
            10
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
