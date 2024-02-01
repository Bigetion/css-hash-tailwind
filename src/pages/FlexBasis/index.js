import React from "react";

import PanelSection from "components/PanelSection";

export default function FlexBasis() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Flex Basis</h1>
      </div>
      <PanelSection title="Setting the flex basis">
        <div className="flex flex-row space-x-4 font-mono text-white text-sm font-bold leading-6">
          <div className="basis-1/4 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
            01
          </div>
          <div className="basis-1/4 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
            02
          </div>
          <div className="basis-1/2 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
            03
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
