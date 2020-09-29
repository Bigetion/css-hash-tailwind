import React from "react";

import PanelSection from "components/PanelSection";

export default function FlexShrink() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Flex Shrink</h1>
      </div>
      <PanelSection title="Shrink">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex bg-gray-200">
            <div className="flex-none text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Longer content that cannot flex
            </div>
            <div className="flex-shrink text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
              Item that will shrink even if it causes the content to wrap
            </div>
            <div className="flex-none text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Longer content that cannot flex
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Don't Shrink">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex bg-gray-200">
            <div className="flex-shrink text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Item that can shrink if needed
            </div>
            <div className="flex-shrink-0 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
              Item that cannot shrink below its initial size
            </div>
            <div className="flex-shrink text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Item that can shrink if needed
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
