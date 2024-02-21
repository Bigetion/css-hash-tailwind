import React from "react";

import PanelSection from "components/PanelSection";

export default function Outline() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Outline</h1>
      </div>
      <PanelSection title="Usage">
        <div className="text-center bg-gray-200 p-4">
          <input type="text" className="px-2 m-2" placeholder="Focus me" />
          <input
            type="text"
            className="px-2 m-2 outline-none"
            placeholder="Focus me (no outline)"
          />
          <input
            type="text"
            className="px-2 m-2 outline-none focus:shadow-outline focus:bg-blue-100"
            placeholder="Focus me (custom)"
          />
        </div>
      </PanelSection>
    </div>
  );
}
