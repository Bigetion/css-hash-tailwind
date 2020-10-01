import React from "react";

import PanelSection from "components/PanelSection";

export default function FlexGrow() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Flex Grow</h1>
      </div>
      <PanelSection title="Grow">
        <div className="rounded-lg overflow-hidden border border-r border-gray-400 p-4">
          <div className="flex bg-gray-200">
            <div className="flex-none text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Content that cannot flex
            </div>
            <div className="flex-grow text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
              Item that will grow
            </div>
            <div className="flex-none text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Content that cannot flex
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Don't Grow">
        <div className="rounded-lg overflow-hidden border border-r border-gray-400 p-4">
          <div className="flex bg-gray-200">
            <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Will grow
            </div>
            <div className="flex-grow-0 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
              Will not grow
            </div>
            <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Will grow
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
