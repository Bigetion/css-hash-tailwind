import React from "react";

import PanelSection from "components/PanelSection";

export default function TextColor() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Text Color</h1>
      </div>
      <PanelSection title="Setting the text color">
        <div className="relative text-xl text-center font-medium leading-6">
          <p className="text-blue-600">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Changing the opacity">
        <div className="text-xl font-medium leading-6 space-y-4">
          <p className="text-blue-600 text-opacity-100 text-opacity-100">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-blue-600 text-opacity-75 text-opacity-75">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-blue-600 text-opacity-50 text-opacity-50">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-blue-600 text-opacity-25 text-opacity-25">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Try hover">
        <div className="relative text-xl text-center font-medium leading-6">
          <p className="text-slate-500 hover:text-blue-600">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      </PanelSection>
    </div>
  );
}
