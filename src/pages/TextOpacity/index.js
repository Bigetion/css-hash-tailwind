import React from "react";

import PanelSection from "components/PanelSection";

export default function TextOpacity() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Text Opacity</h1>
      </div>
      <PanelSection title="Usage">
        <div className="">
          <div className="space-y-4">
            <p className="font-semibold text-xl text-purple-700 text-opacity-100">
              The quick brown fox jumped over the lazy dog.
            </p>
            <p className="font-semibold text-xl text-purple-700 text-opacity-75">
              The quick brown fox jumped over the lazy dog.
            </p>
            <p className="font-semibold text-xl text-purple-700 text-opacity-50">
              The quick brown fox jumped over the lazy dog.
            </p>
            <p className="font-semibold text-xl text-purple-700 text-opacity-25">
              The quick brown fox jumped over the lazy dog.
            </p>
            <p className="font-semibold text-xl text-purple-700 text-opacity-0">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
