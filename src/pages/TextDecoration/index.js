import React from "react";

import PanelSection from "components/PanelSection";

export default function TextDecorationColor() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Text Decoration Color</h1>
      </div>
      <PanelSection title="Setting the text decoration">
        <div className="flex flex-col gap-8">
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3">
              underline
            </span>
            <p className="underline text-lg font-medium text-slate-900">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3">
              overline
            </span>
            <p className="overline text-lg font-medium text-slate-900">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3">
              line-through
            </span>
            <p className="line-through text-lg font-medium text-slate-900">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3">
              no-underline
            </span>
            <p className="text-lg font-medium text-slate-900">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Try hover">
        <div className="text-xl text-center font-medium leading-6 space-y-4">
          <span className="no-underline hover:underline text-cyan-600">
            Link with no underline
          </span>
        </div>
      </PanelSection>
    </div>
  );
}
