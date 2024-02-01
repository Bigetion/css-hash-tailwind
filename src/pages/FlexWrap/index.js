import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function FlexWrap() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Flex Wrap</h1>
      </div>
      <PanelSection title="Don't Wrap">
        <div
          className={`flex flex-nowrap gap-4 font-mono text-white text-sm font-bold leading-6 ${stripes.sky} rounded-lg`}
        >
          <div className="w-2/5 flex-none last:pr-8">
            <div className="p-4 w-full rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">
              01
            </div>
          </div>
          <div className="w-2/5 flex-none last:pr-8">
            <div className="p-4 w-full rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">
              02
            </div>
          </div>
          <div className="w-2/5 flex-none last:pr-8">
            <div className="p-4 w-full rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">
              03
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Wrap Normally">
        <div
          className={`flex flex-wrap gap-4 font-mono text-white text-sm font-bold leading-6 bg-stripes-indigo rounded-lg`}
        >
          <div className="p-4 w-2/5 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg">
            01
          </div>
          <div className="p-4 w-2/5 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg">
            02
          </div>
          <div className="p-4 w-2/5 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg">
            03
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Wrap Reversed">
        <div
          className={`flex flex-wrap-reverse gap-4 font-mono text-white text-sm font-bold leading-6 ${stripes.fuchsia} rounded-lg`}
        >
          <div className="p-4 w-2/5 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
            01
          </div>
          <div className="p-4 w-2/5 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
            02
          </div>
          <div className="p-4 w-2/5 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
            03
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
