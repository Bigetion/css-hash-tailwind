import React from "react";

import PanelSection from "components/PanelSection";

export default function Cursor() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Cursor</h1>
      </div>
      <PanelSection title="Auto">
        <div className="rounded-lg overflow-hidden border border-gray-400 text-center p-4">
          <div className="cursor-auto max-w-xs p-2 bg-gray-200 mx-auto">
            Hover over this text
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Default">
        <div className="rounded-lg overflow-hidden border border-gray-400 text-center p-4">
          <div className="cursor-default max-w-xs p-2 bg-gray-200 mx-auto">
            Hover over this text
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Pointer">
        <div className="rounded-lg overflow-hidden border border-gray-400 text-center p-4">
          <div className="cursor-pointer max-w-xs p-2 bg-gray-200 mx-auto">
            Hover over this text
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Wait">
        <div className="rounded-lg overflow-hidden border border-gray-400 text-center p-4">
          <div className="cursor-wait max-w-xs p-2 bg-gray-200 mx-auto">
            Hover over this text
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Text">
        <div className="rounded-lg overflow-hidden border border-gray-400 text-center p-4">
          <div className="cursor-text max-w-xs p-2 bg-gray-200 mx-auto">
            Hover over this text
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Move">
        <div className="rounded-lg overflow-hidden border border-gray-400 text-center p-4">
          <div className="cursor-move max-w-xs p-2 bg-gray-200 mx-auto">
            Hover over this text
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Not Allowed">
        <div className="rounded-lg overflow-hidden border border-gray-400 text-center p-4">
          <div className="cursor-not-allowed max-w-xs p-2 bg-gray-200 mx-auto">
            Hover over this text
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
