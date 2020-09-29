import React from "react";

import PanelSection from "components/PanelSection";

export default function FlexWrap() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Flex Wrap</h1>
      </div>
      <PanelSection title="Don't Wrap">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex flex-no-wrap bg-gray-200">
            <div className="w-2/5 flex-none p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">1</div>
            </div>
            <div className="w-2/5 flex-none p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">2</div>
            </div>
            <div className="w-2/5 flex-none p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">3</div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Wrap">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex flex-wrap bg-gray-200">
            <div className="w-2/5 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">1</div>
            </div>
            <div className="w-2/5 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">2</div>
            </div>
            <div className="w-2/5 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">3</div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Wrap Reversed">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex flex-wrap-reverse bg-gray-200">
            <div className="w-2/5 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">1</div>
            </div>
            <div className="w-2/5 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">2</div>
            </div>
            <div className="w-2/5 p-2">
              <div className="text-gray-700 text-center bg-gray-400 p-2">3</div>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
