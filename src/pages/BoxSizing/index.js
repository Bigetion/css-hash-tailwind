import React from "react";

import PanelSection from "components/PanelSection";

export default function BoxSizing() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Box Sizing</h1>
      </div>
      <PanelSection title="Include borders and padding">
        <div className="rounded-lg overflow-hidden border border-gray-400 bg-white p-8 flex items-center justify-around">
          <div className="box-border h-20 w-32 p-4 border-4 border-gray-400 bg-gray-200">
            <div className="h-full w-full bg-gray-400"></div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Exclude borders and padding">
        <div className="rounded-lg overflow-hidden border border-gray-400 bg-white p-8 flex items-center justify-around">
          <div className="box-content h-20 w-32 p-4 border-4 border-gray-400 bg-gray-200">
            <div className="h-full w-full bg-gray-400"></div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
