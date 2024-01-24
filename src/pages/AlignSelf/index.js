import React from "react";

import PanelSection from "components/PanelSection";

export default function AlignSelf() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Align Self</h1>
      </div>
      <PanelSection title="Auto">
        <div className="">
          <div className="flex items-stretch bg-gray-200 h-24">
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              1
            </div>
            <div className="self-auto flex-1 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
              2
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              3
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Start">
        <div className="">
          <div className="flex items-stretch bg-gray-200 h-24">
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              1
            </div>
            <div className="self-start flex-1 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
              2
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              3
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Center">
        <div className="">
          <div className="flex items-stretch bg-gray-200 h-24">
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              1
            </div>
            <div className="self-center flex-1 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
              2
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              3
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="End">
        <div className="">
          <div className="flex items-stretch bg-gray-200 h-24">
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              1
            </div>
            <div className="self-end flex-1 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
              2
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              3
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Stretch">
        <div className="">
          <div className="flex items-start bg-gray-200 h-24">
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              1
            </div>
            <div className="self-stretch flex-1 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
              2
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              3
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
