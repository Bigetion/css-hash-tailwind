import React from "react";

import PanelSection from "components/PanelSection";

export default function FlexDirection() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Flex Direction</h1>
      </div>
      <PanelSection title="Row">
        <div className="">
          <div className="flex flex-row bg-gray-200">
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              1
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              2
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              3
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Row Reverse">
        <div className="">
          <div className="flex flex-row-reverse bg-gray-200">
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              1
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              2
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              3
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Column">
        <div className="">
          <div className="flex flex-col bg-gray-200">
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              1
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              2
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              3
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Column Reverse">
        <div className="">
          <div className="flex flex-col-reverse bg-gray-200">
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              1
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              2
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              3
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
