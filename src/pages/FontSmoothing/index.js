import React from "react";

import PanelSection from "components/PanelSection";

export default function FontSmoothing() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Font Smoothing</h1>
      </div>
      <PanelSection title="Subpixel Antialiasing">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <p className="subpixel-antialiased text-lg text-gray-800">
            The quick brown fox jumped over the lazy dog.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Grayscale Antialiasing">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <p className="antialiased text-lg text-gray-800">
            The quick brown fox jumped over the lazy dog.
          </p>
        </div>
      </PanelSection>
    </div>
  );
}
