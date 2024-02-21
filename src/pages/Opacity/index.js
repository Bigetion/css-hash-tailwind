import React from "react";

import PanelSection from "components/PanelSection";

export default function Opacity() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Opacity</h1>
      </div>
      <PanelSection title="Usage">
        <div className="">
          <div className="flex -mx-2">
            <div className="text-sm flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 mx-2 opacity-100">
              .opacity-100
            </div>
            <div className="text-sm flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 mx-2 opacity-75">
              .opacity-75
            </div>
            <div className="text-sm flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 mx-2 opacity-50">
              .opacity-50
            </div>
            <div className="text-sm flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 mx-2 opacity-25">
              .opacity-25
            </div>
            <div className="text-sm flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 mx-2 opacity-0">
              .opacity-0
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
