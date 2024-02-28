import React from "react";

import PanelSection from "components/PanelSection";

export default function UserSelect() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">User Select</h1>
      </div>
      <PanelSection title="Disabling text selection">
        <div className="flex justify-center">
          <div className="select-none inline-flex text-center bg-white text-slate-900 font-semibold font-sans text-sm shadow-lg rounded-lg ring-1 ring-slate-900 ring-opacity-5 px-4 py-3">
            The quick brown fox jumps over the lazy dog.
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Allowing text selection">
        <div className="flex justify-center">
          <div className="select-text inline-flex text-center bg-white text-slate-900 font-semibold font-sans text-sm shadow-lg rounded-lg ring-1 ring-slate-900 ring-opacity-5 px-4 py-3">
            The quick brown fox jumps over the lazy dog.
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Select all text in one click">
        <div className="flex justify-center">
          <div className="select-all inline-flex text-center bg-white text-slate-900 font-semibold font-sans text-sm shadow-lg rounded-lg ring-1 ring-slate-900 ring-opacity-5 px-4 py-3">
            The quick brown fox jumps over the lazy dog.
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Using auto select behaviour">
        <div className="flex justify-center">
          <div className="select-auto inline-flex text-center bg-white text-slate-900 font-semibold font-sans text-sm shadow-lg rounded-lg ring-1 ring-slate-900 ring-opacity-5 px-4 py-3">
            The quick brown fox jumps over the lazy dog.
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
