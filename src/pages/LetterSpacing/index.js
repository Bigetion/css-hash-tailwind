import React from "react";

import PanelSection from "components/PanelSection";

export default function LetterSpacing() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Letter Spacing</h1>
      </div>
      <PanelSection title="Usage">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="mb-6">
            <p className="text-sm text-gray-600">.tracking-tighter</p>
            <p className="tracking-tighter text-lg text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.tracking-tight</p>
            <p className="tracking-tight text-lg text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.tracking-normal</p>
            <p className="tracking-normal text-lg text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.tracking-wide</p>
            <p className="tracking-wide text-lg text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.tracking-wider</p>
            <p className="tracking-wider text-lg text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">.tracking-widest</p>
            <p className="tracking-widest text-lg text-gray-800">
              The quick brown fox jumped over the lazy dog.
            </p>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
