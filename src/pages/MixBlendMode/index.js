import React from "react";

import PanelSection from "components/PanelSection";

export default function MixBlendMode() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Mix Blend Mode</h1>
      </div>
      <PanelSection title="Setting an element’s blend mode">
        <div className="flex justify-center -space-x-14">
          <div className="w-32 h-32 mix-blend-multiply bg-blue-400 rounded-full" />
          <div className="w-32 h-32 mix-blend-multiply bg-pink-400 rounded-full" />
        </div>
      </PanelSection>
    </div>
  );
}
