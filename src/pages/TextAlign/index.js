import React from "react";

import PanelSection from "components/PanelSection";

export default function TextAlign() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Text Align</h1>
      </div>
      <PanelSection title="Setting the text alignment">
        <div className="flex flex-col space-y-8">
          <div className="mx-auto max-w-xl">
            <p className="font-medium text-sm text-slate-500 font-mono mb-1 dark:text-slate-400">
              text-left
            </p>
            <p className="text-left bg-white shadow p-8 text-slate-700 text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
              So I started to walk into the water. I won't lie to you boys, I
              was terrified. But I pressed on, and as I made my way past the
              breakers a strange calm came over me. I don't know if it was
              divine intervention or the kinship of all living things but I tell
              you Jerry at that moment, I <em>was</em> a marine biologist.
            </p>
          </div>
          <div className="mx-auto max-w-xl">
            <p className="font-medium text-sm text-slate-500 font-mono mb-1 dark:text-slate-400">
              text-center
            </p>
            <p className="text-center bg-white shadow p-8 text-slate-700 text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
              So I started to walk into the water. I won't lie to you boys, I
              was terrified. But I pressed on, and as I made my way past the
              breakers a strange calm came over me. I don't know if it was
              divine intervention or the kinship of all living things but I tell
              you Jerry at that moment, I <em>was</em> a marine biologist.
            </p>
          </div>
          <div className="mx-auto max-w-xl">
            <p className="font-medium text-sm text-slate-500 font-mono mb-1 dark:text-slate-400">
              text-right
            </p>
            <p className="text-right bg-white shadow p-8 text-slate-700 text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
              So I started to walk into the water. I won't lie to you boys, I
              was terrified. But I pressed on, and as I made my way past the
              breakers a strange calm came over me. I don't know if it was
              divine intervention or the kinship of all living things but I tell
              you Jerry at that moment, I <em>was</em> a marine biologist.
            </p>
          </div>
          <div className="mx-auto max-w-xl">
            <p className="font-medium text-sm text-slate-500 font-mono mb-1 dark:text-slate-400">
              text-justify
            </p>
            <p className="text-justify bg-white shadow p-8 text-slate-700 text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
              So I started to walk into the water. I won't lie to you boys, I
              was terrified. But I pressed on, and as I made my way past the
              breakers a strange calm came over me. I don't know if it was
              divine intervention or the kinship of all living things but I tell
              you Jerry at that moment, I <em>was</em> a marine biologist.
            </p>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
