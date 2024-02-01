import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function GridColumnStartEnd() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Grid Column Start End</h1>
      </div>
      <PanelSection title="Spanning columns">
        <div className="grid grid-cols-3 gap-4 font-mono text-white text-sm text-center font-bold leading-6">
          <div className="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">
            01
          </div>
          <div className="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">
            02
          </div>
          <div className="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">
            03
          </div>
          <div className="p-4 rounded-lg shadow-lg bg-indigo-500 col-span-2">
            04
          </div>
          <div className="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">
            05
          </div>
          <div className="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">
            06
          </div>
          <div className="p-4 rounded-lg shadow-lg bg-indigo-500 col-span-2">
            07
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Starting and ending lines">
        <div className="grid grid-cols-6 gap-4 font-mono text-white text-sm text-center font-bold leading-6">
          <div className={`p-4 rounded-lg ${stripes.sky}`} />
          <div className="p-4 rounded-lg shadow-lg bg-sky-500 col-start-2 col-span-4">
            01
          </div>
          <div className={`p-4 rounded-lg ${stripes.sky}`} />
          <div className="p-4 rounded-lg shadow-lg bg-sky-500 col-start-1 col-end-3">
            02
          </div>
          <div className={`p-4 rounded-lg ${stripes.sky}`} />
          <div className={`p-4 rounded-lg ${stripes.sky}`} />
          <div className="p-4 rounded-lg shadow-lg bg-sky-500 col-end-7 col-span-2">
            03
          </div>
          <div className="p-4 rounded-lg shadow-lg bg-sky-500 col-start-1 col-end-7">
            04
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
