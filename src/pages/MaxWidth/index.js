import React from "react";

import PanelSection from "components/PanelSection";

export default function MaxWidth() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Max Width</h1>
      </div>
      <PanelSection title="Usage">
        <div className="">
          <div className="max-w-md mx-auto text-center p-6 bg-gray-300">
            max-w-md
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
