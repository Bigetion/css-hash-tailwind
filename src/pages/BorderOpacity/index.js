import React from "react";

import PanelSection from "components/PanelSection";

export default function BorderOpacity() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Border Opacity</h1>
      </div>
      <PanelSection title="Usage">
        <div className="rounded-lg overflow-hidden border border-gray-400 bg-checkered p-4">
          <div className="flex justify-around">
            <div className="h-16 w-16 rounded border-4 border-blue-500 border-opacity-100"></div>
            <div className="h-16 w-16 rounded border-4 border-blue-500 border-opacity-75"></div>
            <div className="h-16 w-16 rounded border-4 border-blue-500 border-opacity-50"></div>
            <div className="h-16 w-16 rounded border-4 border-blue-500 border-opacity-25"></div>
            <div className="h-16 w-16 rounded border-4 border-blue-500 border-opacity-0"></div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
