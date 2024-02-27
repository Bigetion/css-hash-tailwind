import React from "react";

import PanelSection from "components/PanelSection";

export default function ScrollPadding() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Scroll Padding</h1>
      </div>
      <PanelSection title="Setting the scroll padding"></PanelSection>
    </div>
  );
}
