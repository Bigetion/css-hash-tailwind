import React from "react";

import PanelSection from "components/PanelSection";

export default function Resize() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Resize</h1>
      </div>
      <PanelSection title="Resize in all directions">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <textarea className="resize border rounded focus:outline-none focus:shadow-outline"></textarea>
        </div>
      </PanelSection>
      <PanelSection title="Resize vertically">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <textarea className="resize-y border rounded focus:outline-none focus:shadow-outline"></textarea>
        </div>
      </PanelSection>
      <PanelSection title="Resize horizontally">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <textarea className="resize-x border rounded focus:outline-none focus:shadow-outline"></textarea>
        </div>
      </PanelSection>
      <PanelSection title="Prevent resizing">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <textarea className="resize-none border rounded focus:outline-none focus:shadow-outline"></textarea>
        </div>
      </PanelSection>
    </div>
  );
}
