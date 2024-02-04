import React from "react";

import PanelSection from "components/PanelSection";

export default function Size() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Size</h1>
      </div>
      <PanelSection title="Usage">
        <div className="grid grid-flow-col justify-center gap-4 font-mono font-bold text-xs text-center text-white">
          <div className="grid items-center justify-center bg-blue-500 rounded-lg shadow-lg size-16">
            size-16
          </div>
          <div className="grid items-center justify-center bg-blue-500 rounded-lg shadow-lg size-20">
            size-20
          </div>
          <div className="items-center justify-center bg-blue-500 rounded-lg shadow-lg size-24 grid">
            size-24
          </div>
          <div className="items-center justify-center bg-blue-500 rounded-lg shadow-lg size-32 hidden sm:grid">
            size-32
          </div>
          <div className="items-center justify-center bg-blue-500 rounded-lg shadow-lg size-40 hidden md:grid">
            size-40
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
