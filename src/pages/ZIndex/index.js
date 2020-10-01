import React from "react";

import PanelSection from "components/PanelSection";

export default function ZIndex() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Z Index</h1>
      </div>
      <PanelSection title="Usage">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="relative h-32 text-center">
            <div className="z-40 absolute w-24 h-24 ml-0 mt-0 bg-gray-400 flex justify-center items-center">
              z-40
            </div>
            <div className="z-30 absolute w-24 h-24 ml-2 mt-2 bg-gray-500 flex justify-center items-center">
              z-30
            </div>
            <div className="z-20 absolute w-24 h-24 ml-4 mt-4 bg-gray-600 flex justify-center items-center">
              z-20
            </div>
            <div className="z-10 absolute w-24 h-24 ml-6 mt-6 bg-gray-700 flex justify-center items-center">
              z-10
            </div>
            <div className="z-0 absolute w-24 h-24 ml-8 mt-8 bg-gray-800 flex justify-center items-center">
              z-0
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
