import React from "react";

import PanelSection from "components/PanelSection";

export default function TextTransform() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Text Transform</h1>
      </div>
      <PanelSection title="Normal case">
        <div className="">
          <p className="normal-case text-lg text-gray-800">
            The quick brown fox jumped over the lazy dog.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Uppercase">
        <div className="">
          <p className="uppercase text-lg text-gray-800">
            The quick brown fox jumped over the lazy dog.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Lowercase">
        <div className="">
          <p className="lowercase text-lg text-gray-800">
            The quick brown fox jumped over the lazy dog.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Capitalize">
        <div className="">
          <p className="capitalize text-lg text-gray-800">
            The quick brown fox jumped over the lazy dog.
          </p>
        </div>
      </PanelSection>
    </div>
  );
}
