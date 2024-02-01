import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function BoxSizing() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Box Sizing</h1>
      </div>
      <PanelSection title="Include borders and padding" paddingless>
        <div className="relative grid grid-cols-3 grid-rows-3 gap-px bg-slate-700/10 font-mono text-sm font-bold leading-6 max-w-sm mx-auto w-full shadow-xl dark:bg-slate-700">
          <div className="bg-white col-start-1 row-start-1 dark:bg-slate-800" />
          <div className="relative bg-white col-start-2 row-start-1 dark:bg-slate-800">
            <div className="absolute flex bottom-2 left-0 right-0">
              <div className="transform bg-sky-400 h-px absolute left-0 top-1/2 -translate-y-px right-0" />

              <div className="w-full">
                <div className="transform rounded-full h-2 bg-sky-400 w-px absolute left-0 top-1/2 -translate-x-px -translate-y-1" />
              </div>

              <div className="relative flex-auto font-mono font-bold w-full bg-white text-sky-600 text-xs px-1.5 flex items-center justify-center leading-none dark:bg-slate-800 dark:text-sky-400">
                128px
              </div>

              <div className="w-full">
                <div className="transform rounded-full h-2 bg-sky-400 w-px absolute right-0 top-1/2 translate-x-px -translate-y-1" />
              </div>
            </div>
          </div>
          <div className="bg-white col-start-3 row-start-1 dark:bg-slate-800" />
          <div className="relative bg-white col-start-1 row-start-2 dark:bg-slate-800">
            <div className="absolute flex top-0 bottom-0 right-2 w-3">
              <div className="transform bg-sky-400 w-px absolute top-0 left-1/2 -translate-x-px bottom-0" />

              <div className="w-full">
                <div className="transform rounded-full w-2 bg-sky-400 h-px absolute top-0 left-1/2 -translate-y-px -translate-x-1" />
              </div>

              <div className="transform relative -rotate-90 -translate-x-4 translate-y-14 h-3 flex flex-auto font-mono font-bold bg-white text-sky-600 text-xs px-1.5 items-center justify-center leading-none dark:bg-slate-800 dark:text-sky-400">
                128px
              </div>

              <div className="w-full">
                <div className="transform rounded-full w-2 bg-sky-400 h-px absolute bottom-0 left-1/2 translate-y-px -translate-x-1" />
              </div>
            </div>
          </div>
          <div className="bg-white col-start-2 row-start-2 w-32 h-32 ring-1 ring-sky-300 dark:bg-slate-800 dark:ring-sky-400">
            <div
              className={`box-border relative ${stripes.sky} w-32 h-32 p-5 ring ring-sky-300 ring-inset`}
            >
              <div className="w-full h-full bg-sky-500 ring-1 ring-sky-500" />
            </div>
          </div>
          <div className="bg-white col-start-3 row-start-2 dark:bg-slate-800" />
          <div className="bg-white col-start-1 row-start-3 dark:bg-slate-800" />
          <div className="bg-white col-start-2 row-start-3 dark:bg-slate-800" />
          <div className="bg-white col-start-3 row-start-3 dark:bg-slate-800" />
        </div>
      </PanelSection>
      <PanelSection title="Exclude borders and padding">
        <div className="relative grid grid-cols-3 grid-rows-3 gap-px bg-slate-700/10 font-mono text-sm font-bold leading-6 max-w-sm mx-auto w-full shadow-xl dark:bg-slate-700">
          <div className="bg-white col-start-1 row-start-1 dark:bg-slate-800" />
          <div className="relative bg-white col-start-2 row-start-1 dark:bg-slate-800">
            <div className="transform absolute flex bottom-2 left-0 right-0 -translate-y-5">
              <div className="transform bg-blue-400 h-px absolute left-0 top-1/2 -translate-y-px right-0" />
              <div className="w-full">
                <div className="transform rounded-full h-2 bg-blue-400 w-px absolute left-0 top-1/2 -translate-x-px -translate-y-1" />
              </div>
              <div className="relative flex-auto font-mono font-bold w-full bg-white text-blue-600 text-xs px-1.5 flex items-center justify-center leading-none dark:bg-slate-800 dark:text-blue-400">
                128px
              </div>
              <div className="w-full">
                <div className="transform rounded-full h-2 bg-blue-400 w-px absolute right-0 top-1/2 translate-x-px -translate-y-1" />
              </div>
            </div>
          </div>
          <div className="bg-white col-start-3 row-start-1 dark:bg-slate-800" />
          <div className="relative bg-white col-start-1 row-start-2 dark:bg-slate-800">
            <div className="transform absolute flex top-0 bottom-0 right-2 w-3 -translate-x-5">
              <div className="transform bg-blue-400 w-px absolute top-0 left-1/2 -translate-x-px bottom-0" />
              <div className="w-full">
                <div className="transform rounded-full w-2 bg-blue-400 h-px absolute top-0 left-1/2 -translate-y-px -translate-x-1" />
              </div>
              <div className="transform relative -rotate-90 -translate-x-4 translate-y-14 h-3 flex flex-auto font-mono font-bold bg-white text-blue-600 text-xs px-1.5 items-center justify-center leading-none dark:bg-slate-800 dark:text-blue-400">
                128px
              </div>
              <div className="w-full">
                <div className="transform rounded-full w-2 bg-blue-400 h-px absolute bottom-0 left-1/2 translate-y-px -translate-x-1" />
              </div>
            </div>
          </div>
          <div className="bg-white col-start-2 row-start-2 w-32 h-32">
            <div
              className={`transform box-content -translate-x-5 -translate-y-5 relative ${stripes.sky} w-32 h-32 p-5 ring-4 ring-blue-300 ring-inset dark:ring-blue-500`}
            >
              <div className="w-full h-full bg-blue-500 ring-1 ring-blue-500" />
            </div>
          </div>
          <div className="bg-white col-start-3 row-start-2 dark:bg-slate-800" />
          <div className="bg-white col-start-1 row-start-3 dark:bg-slate-800" />
          <div className="bg-white col-start-2 row-start-3 dark:bg-slate-800" />
          <div className="bg-white col-start-3 row-start-3 dark:bg-slate-800" />
        </div>
      </PanelSection>
    </div>
  );
}
