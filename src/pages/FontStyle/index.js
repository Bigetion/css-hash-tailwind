import React from "react";

import PanelSection from "components/PanelSection";

export default function FontStyle() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Font Style</h1>
      </div>
      <PanelSection title="Non italics">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <p className="not-italic text-lg text-gray-800">
            The quick brown fox jumped over the lazy dog.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Italics">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <p className="italic text-lg text-gray-800">
            The quick brown fox jumped over the lazy dog.
          </p>
        </div>
      </PanelSection>
    </div>
  );
}
