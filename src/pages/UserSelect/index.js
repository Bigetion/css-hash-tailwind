import React from "react";

import PanelSection from "components/PanelSection";

export default function UserSelect() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">User Select</h1>
      </div>
      <PanelSection title="Disable selecting text">
        <div className="rounded-lg overflow-hidden border border-gray-400 text-center p-4">
          <div className="mx-auto max-w-sm bg-gray-200 p-2 select-none">
            This text is not selectable
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Allow selecting text">
        <div className="rounded-lg overflow-hidden border border-gray-400 text-center p-4">
          <div className="mx-auto max-w-sm bg-gray-200 p-2 select-text">
            This text is selectable
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Select all text in one click">
        <div className="rounded-lg overflow-hidden border border-gray-400 text-center p-4">
          <div className="mx-auto max-w-sm bg-gray-200 p-2 select-all">
            Click anywhere in this text to select it all
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Auto">
        <div className="rounded-lg overflow-hidden border border-gray-400 text-center p-4">
          <div className="mx-auto max-w-sm bg-gray-200 p-2 select-auto">
            This text is selectable
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
