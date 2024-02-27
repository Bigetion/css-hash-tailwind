import React from "react";

import PanelSection from "components/PanelSection";

export default function ScrollSnapStop() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Scroll Snap Stop</h1>
      </div>
      <PanelSection title="Forcing snap position stops"></PanelSection>
    </div>
  );
}
