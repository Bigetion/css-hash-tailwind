import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function SpaceBetween() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Space Between</h1>
      </div>
      <PanelSection title="Add horizontal space between children">
        <div className="flex justify-start font-mono text-white text-sm font-bold leading-6">
          <div className={`flex space-x-4 ${stripes.fuchsia} rounded-lg`}>
            <div className="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">
              01
            </div>
            <div className="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">
              02
            </div>
            <div className="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">
              03
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Add vertical space between children">
        <div className="flex flex-col justify-center text-center w-full font-mono text-white text-sm font-bold leading-6">
          <div
            className={`flex flex-col space-y-4 ${stripes.indigo} rounded-lg`}
          >
            <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-indigo-500">
              01
            </div>
            <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-indigo-500">
              02
            </div>
            <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-indigo-500">
              03
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Reversing children order">
        <div className="flex justify-end font-mono text-white text-sm font-bold leading-6">
          <div
            className={`flex flex-row-reverse space-x-4 space-x-reverse ${stripes.cyan} rounded-lg`}
          >
            <div className="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">
              01
            </div>
            <div className="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">
              02
            </div>
            <div className="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">
              03
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
