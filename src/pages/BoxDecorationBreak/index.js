import React from "react";

import PanelSection from "components/PanelSection";

export default function BoxDecorationBreak() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Box Decoration Break</h1>
      </div>
      <PanelSection title="">
        <div class="text-center text-5xl font-extrabold leading-none tracking-tight">
          <span class="decoration-clone bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-red-500">
            Hello
            <br />
            World
          </span>
        </div>
      </PanelSection>
    </div>
  );
}
