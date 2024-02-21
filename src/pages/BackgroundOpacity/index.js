import React from "react";

import PanelSection from "components/PanelSection";

export default function BackgroundOpacity() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Background Opacity</h1>
      </div>
      <PanelSection title="Usage">
        <div className="bg-checkered p-4">
          <div className="flex justify-around">
            <div className="h-16 w-16 rounded bg-blue-500 bg-opacity-100"></div>
            <div className="h-16 w-16 rounded bg-blue-500 bg-opacity-75"></div>
            <div className="h-16 w-16 rounded bg-blue-500 bg-opacity-50"></div>
            <div className="h-16 w-16 rounded bg-blue-500 bg-opacity-25"></div>
            <div className="h-16 w-16 rounded bg-blue-500 bg-opacity-0"></div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
