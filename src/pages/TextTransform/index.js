import React from "react";

import PanelSection from "components/PanelSection";

export default function TextTransform() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Text Transform</h1>
      </div>
      <PanelSection title="Normal case">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <p className="normal-case text-lg text-gray-800">
            The quick brown fox jumped over the lazy dog.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Uppercase">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <p className="uppercase text-lg text-gray-800">
            The quick brown fox jumped over the lazy dog.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Lowercase">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <p className="lowercase text-lg text-gray-800">
            The quick brown fox jumped over the lazy dog.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Capitalize">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <p className="capitalize text-lg text-gray-800">
            The quick brown fox jumped over the lazy dog.
          </p>
        </div>
      </PanelSection>
    </div>
  );
}
