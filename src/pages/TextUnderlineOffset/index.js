import React from "react";

import PanelSection from "components/PanelSection";

export default function TextUnderlineOffset() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Text Underline Offset</h1>
      </div>
      <PanelSection title="Setting the underline offset">
        <div className="flex flex-col gap-8 text-slate-900 dark:text-slate-200">
          <div>
            <div className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              underline-offset-1
            </div>
            <p className="text-lg font-medium underline underline-offset-1">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <div className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              underline-offset-2
            </div>
            <p className="text-lg font-medium underline underline-offset-2">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <div className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              underline-offset-4
            </div>
            <p className="text-lg font-medium underline underline-offset-4">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
          <div>
            <div className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              underline-offset-8
            </div>
            <p className="text-lg font-medium underline underline-offset-8">
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
