import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function FlexGrow() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Flex Grow</h1>
      </div>
      <PanelSection title="Grow">
        <div
          className={`flex gap-4 text-white text-sm font-bold font-mono leading-6 ${stripes.indigo} rounded-lg`}
        >
          <div className="w-14 h-14 flex-none rounded-lg flex items-center justify-center bg-indigo-300">
            01
          </div>
          <div className="p-4 grow rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg">
            02
          </div>
          <div className="p-4 w-14 h-14 flex-none rounded-lg flex items-center justify-center bg-indigo-300">
            03
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Don't Grow">
        <div
          className={`flex gap-4 text-white text-sm font-bold font-mono leading-6 ${stripes.pink} rounded-lg`}
        >
          <div className="p-4 grow rounded-lg flex items-center justify-center bg-pink-300">
            01
          </div>
          <div className="shrink-0 w-14 h-14 grow-0 rounded-lg flex items-center justify-center bg-pink-500 shadow-lg">
            02
          </div>
          <div className="p-4 grow rounded-lg hidden md:flex items-center justify-center bg-pink-300">
            03
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
