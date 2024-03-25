import React from "react";

import PanelSection from "components/PanelSection";

export default function TextShadow() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Text Shadow</h1>
      </div>
      <PanelSection title="Setting the text shadow">
        <div className="relative text-xl text-center font-medium leading-6">
          <p className="text-blue-600 text-4xl text-shadow-red-600">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Changing the opacity">
        <div className="text-xl font-medium leading-6 space-y-4">
          <p className="text-blue-600 text-4xl text-shadow-red-600 text-shadow-opacity-100">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-blue-600 text-4xl text-shadow-red-600 text-shadow-opacity-75">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-blue-600 text-4xl text-shadow-red-600 text-shadow-opacity-50">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-blue-600 text-4xl text-shadow-red-600 text-shadow-opacity-25">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Try hover">
        <div className="relative text-xl text-center font-medium leading-6">
          <p className="text-blue-600 text-4xl hover:text-shadow-red-600">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      </PanelSection>
    </div>
  );
}
