import React from "react";

import PanelSection from "components/PanelSection";

export default function Resize() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Resize</h1>
      </div>
      <PanelSection title="Resize in all directions">
        <div className="w-full flex items-center justify-center">
          <textarea
            className="resize text-sm p-2 w-80 ring-1 ring-slate-900 ring-opacity-10 shadow-sm rounded-md"
            rows="3"
          ></textarea>
        </div>
      </PanelSection>
      <PanelSection title="Resize vertically">
        <div className="w-full flex items-center justify-center">
          <textarea
            className="resize-y text-sm p-2 w-80 ring-1 ring-slate-900 ring-opacity-10 shadow-sm rounded-md"
            rows="3"
          ></textarea>
        </div>
      </PanelSection>
      <PanelSection title="Resize horizontally">
        <div className="w-full flex items-center justify-center">
          <textarea
            className="resize-x text-sm p-2 w-80 ring-1 ring-slate-900 ring-opacity-10 shadow-sm rounded-md"
            rows="3"
          ></textarea>
        </div>
      </PanelSection>
      <PanelSection title="Prevent resizing">
        <div className="w-full flex items-center justify-center">
          <textarea
            className="resize-none text-sm p-2 w-80 ring-1 ring-slate-900 ring-opacity-10 shadow-sm rounded-md"
            rows="3"
          ></textarea>
        </div>
      </PanelSection>
    </div>
  );
}
