import React from "react";

import PanelSection from "components/PanelSection";

export default function GridAutoFlow() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Grid Auto Flow</h1>
      </div>
      <PanelSection title="Usage">
        <div className="bg-white p-8">
          <div className="grid grid-cols-3 grid-rows-3 grid-flow-col gap-4">
            <div className="bg-gray-300 h-12 flex items-center justify-center">
              1
            </div>
            <div className="bg-gray-500 h-12 flex items-center justify-center">
              2
            </div>
            <div className="bg-gray-300 h-12 flex items-center justify-center">
              3
            </div>
            <div className="bg-gray-500 h-12 flex items-center justify-center">
              4
            </div>
            <div className="bg-gray-300 h-12 flex items-center justify-center">
              5
            </div>
            <div className="bg-gray-500 h-12 flex items-center justify-center">
              6
            </div>
            <div className="bg-gray-300 h-12 flex items-center justify-center">
              7
            </div>
            <div className="bg-gray-500 h-12 flex items-center justify-center">
              8
            </div>
            <div className="bg-gray-300 h-12 flex items-center justify-center">
              9
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
