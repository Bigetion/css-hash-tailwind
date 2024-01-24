import React from "react";

import PanelSection from "components/PanelSection";

export default function BorderColor() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Border Color</h1>
      </div>
      <PanelSection title="Usage">
        <div className="text-center p-4">
          <div className="max-w-xs w-full mx-auto">
            <input
              className="border border-red-500 bg-white text-gray-900 appearance-none block w-full text-gray-900 border rounded py-3 px-4 focus:outline-none"
              placeholder="Your email"
            />
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
