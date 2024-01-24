import React from "react";

import PanelSection from "components/PanelSection";

export default function GridRowStartEnd() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Grid Row Start End</h1>
      </div>
      <PanelSection title="Spanning rows">
        <div className="bg-white p-8">
          <div className="h-64 grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-3 bg-gray-500"></div>
            <div className="row-span-1 col-span-2 bg-gray-300"></div>
            <div className="row-span-2 col-span-2 bg-gray-300"></div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Starting and ending lines">
        <div className="bg-white p-8">
          <div className="h-64 grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-start-2 row-span-2 bg-gray-500"></div>
            <div className="row-end-3 row-span-2 bg-gray-300"></div>
            <div className="row-start-1 row-end-4 bg-gray-500"></div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
