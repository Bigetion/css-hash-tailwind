import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function FlexShrink() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Flex Shrink</h1>
      </div>
      <PanelSection title="Shrink">
        <div
          className={`flex gap-4 text-white text-sm font-bold font-mono leading-6 ${stripes.indigo} rounded-lg`}
        >
          <div className="p-4 w-14 h-14 flex-none rounded-lg flex items-center justify-center bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">
            01
          </div>
          <div className="p-4 w-64 shrink rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg">
            02
          </div>
          <div className="p-4 w-14 h-14 flex-none rounded-lg hidden sm:flex items-center justify-center bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">
            03
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Don't Shrink">
        <div
          className={`flex gap-4 text-white text-sm font-bold font-mono leading-6 ${stripes.blue} rounded-lg`}
        >
          <div className="p-4 flex-1 rounded-lg flex items-center justify-center bg-blue-300 dark:bg-blue-800 dark:text-blue-500">
            01
          </div>
          <div className="p-4 w-16 sm:w-64 shrink-0 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
            02
          </div>
          <div className="p-4 flex-1 rounded-lg hidden sm:flex items-center justify-center bg-blue-300 dark:bg-blue-800 dark:text-blue-500">
            03
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
