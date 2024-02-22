import React from "react";

import PanelSection from "components/PanelSection";

export default function TextIndent() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Text Indent</h1>
      </div>
      <PanelSection title="Adding a text indent" paddingless>
        <div className="bg-white p-8 shadow-xl text-slate-700 max-w-md mx-auto overflow-auto leading-6">
          <p className="indent-8">
            So I started to walk into the water. I won't lie to you boys, I was
            terrified. But I pressed on, and as I made my way past the breakers
            a strange calm came over me. I don't know if it was divine
            intervention or the kinship of all living things but I tell you
            Jerry at that moment, I <em>was</em> a marine biologist.
          </p>
        </div>
      </PanelSection>
    </div>
  );
}
