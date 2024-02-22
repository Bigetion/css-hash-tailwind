import React from "react";

import patternSvg from "./pattern.svg";

import PanelSection from "components/PanelSection";

export default function BackgroundRepeat() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Background Repeat</h1>
      </div>
      <PanelSection title="Repeat">
        <div
          className="w-full mx-auto max-w-xl bg-white h-80 bg-repeat bg-center shadow-xl rounded-lg"
          style={{ backgroundImage: `url(${patternSvg})` }}
        />
      </PanelSection>
      <PanelSection title="No Repeat">
        <div
          className="w-full mx-auto max-w-xl bg-white h-64 bg-no-repeat bg-center shadow-xl rounded-lg"
          style={{ backgroundImage: `url(${patternSvg})` }}
        />
      </PanelSection>
      <PanelSection title="Repeat Horizontally">
        <div
          className="w-full mx-auto max-w-xl bg-white h-64 bg-repeat-x bg-center shadow-xl rounded-lg"
          style={{ backgroundImage: `url(${patternSvg})` }}
        />
      </PanelSection>
      <PanelSection title="Repeat Vertically">
        <div
          className="w-full mx-auto max-w-xl bg-white h-64 bg-repeat-y bg-center shadow-xl rounded-lg"
          style={{ backgroundImage: `url(${patternSvg})` }}
        />
      </PanelSection>
    </div>
  );
}
