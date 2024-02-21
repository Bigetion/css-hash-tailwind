import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function GridRowStartEnd() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Grid Row Start End</h1>
      </div>
      <PanelSection title="Spanning rows">
        <div
          className={`grid grid-rows-3 grid-flow-col gap-4 font-mono text-white text-sm text-center font-bold leading-6 ${stripes.fuchsia} rounded-lg`}
        >
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500 grid place-content-center row-span-3">
            01
          </div>
          <div className="p-4 rounded-lg bg-fuchsia-300 grid place-content-center col-span-2 dark:bg-fuchsia-800 dark:text-fuchsia-400">
            02
          </div>
          <div className="p-4 rounded-lg shadow-lg bg-fuchsia-500 grid place-content-center row-span-2 col-span-2">
            03
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Starting and ending lines">
        <div
          className={`grid grid-rows-3 grid-flow-col gap-4 font-mono text-white text-sm text-center font-bold leading-6 ${stripes.sky} rounded-lg`}
        >
          <div className="p-4 sm:p-12 rounded-lg shadow-lg bg-blue-500 grid place-content-center row-start-2 row-span-2">
            01
          </div>
          <div className="p-4 sm:p-12 rounded-lg shadow-lg bg-blue-500 grid place-content-center row-end-3 row-span-2">
            02
          </div>
          <div className="p-4 sm:p-12 rounded-lg shadow-lg bg-blue-500 grid place-content-center row-start-1 row-end-4">
            03
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
