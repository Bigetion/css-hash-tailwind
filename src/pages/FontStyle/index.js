import React from "react";

import PanelSection from "components/PanelSection";

export default function FontStyle() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Font Style</h1>
      </div>
      <PanelSection title="Non italics">
        <div className="flex flex-col gap-8">
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              italic
            </span>
            <p className="italic text-lg font-medium text-slate-900 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              not-italic
            </span>
            <p className="not-italic text-lg font-medium text-slate-900 dark:text-slate-200">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
