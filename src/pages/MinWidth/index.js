import React from "react";

import PanelSection from "components/PanelSection";

export default function MinWidth() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Min Width</h1>
      </div>
      <PanelSection title="Usage">
        <div className="">
          <div className="w-24 min-w-full text-center p-6 bg-gray-300">
            min-w-full
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
