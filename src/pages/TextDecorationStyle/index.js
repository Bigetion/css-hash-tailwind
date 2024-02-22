import React from "react";

import PanelSection from "components/PanelSection";

export default function TextDecorationStyle() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Text Decoration Style</h1>
      </div>
      <PanelSection title="Setting the text decoration style">
        <div className="flex flex-col gap-8 text-slate-900">
          <div>
            <div className="font-medium text-sm text-slate-500 font-mono mb-3">
              decoration-solid
            </div>
            <p className="text-lg font-medium underline decoration-solid">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <div className="font-medium text-sm text-slate-500 font-mono mb-3">
              decoration-double
            </div>
            <p className="text-lg font-medium underline decoration-double">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <div className="font-medium text-sm text-slate-500 font-mono mb-3">
              decoration-dotted
            </div>
            <p className="text-lg font-medium underline decoration-dotted">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <div className="font-medium text-sm text-slate-500 font-mono mb-3">
              decoration-dashed
            </div>
            <p className="text-lg font-medium underline decoration-dashed">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <div className="font-medium text-sm text-slate-500 font-mono mb-3">
              decoration-wavy
            </div>
            <p className="text-lg font-medium underline decoration-wavy">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
