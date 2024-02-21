import React from "react";

import PanelSection from "components/PanelSection";

export default function LineHeight() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Line Height</h1>
      </div>
      <PanelSection title="Relative line-heights">
        <div className="flex flex-col gap-8">
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              leading-normal
            </span>
            <p className="leading-normal text-slate-900 dark:text-slate-200">
              So I started to walk into the water. I won't lie to you boys, I
              was terrified. But I pressed on, and as I made my way past the
              breakers a strange calm came over me. I don't know if it was
              divine intervention or the kinship of all living things but I tell
              you Jerry at that moment, I <em>was</em> a marine biologist.
            </p>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              leading-relaxed
            </span>
            <p className="leading-relaxed text-slate-900 dark:text-slate-200">
              So I started to walk into the water. I won't lie to you boys, I
              was terrified. But I pressed on, and as I made my way past the
              breakers a strange calm came over me. I don't know if it was
              divine intervention or the kinship of all living things but I tell
              you Jerry at that moment, I <em>was</em> a marine biologist.
            </p>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              leading-loose
            </span>
            <p className="leading-loose text-slate-900 dark:text-slate-200">
              So I started to walk into the water. I won't lie to you boys, I
              was terrified. But I pressed on, and as I made my way past the
              breakers a strange calm came over me. I don't know if it was
              divine intervention or the kinship of all living things but I tell
              you Jerry at that moment, I <em>was</em> a marine biologist.
            </p>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Fixed line-heights">
        <div className="flex flex-col gap-8">
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              leading-6
            </span>
            <p className="leading-6 text-slate-900 dark:text-slate-200">
              So I started to walk into the water. I won't lie to you boys, I
              was terrified. But I pressed on, and as I made my way past the
              breakers a strange calm came over me. I don't know if it was
              divine intervention or the kinship of all living things but I tell
              you Jerry at that moment, I <em>was</em> a marine biologist.
            </p>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              leading-7
            </span>
            <p className="leading-7 text-slate-900 dark:text-slate-200">
              So I started to walk into the water. I won't lie to you boys, I
              was terrified. But I pressed on, and as I made my way past the
              breakers a strange calm came over me. I don't know if it was
              divine intervention or the kinship of all living things but I tell
              you Jerry at that moment, I <em>was</em> a marine biologist.
            </p>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">
              leading-8
            </span>
            <p className="leading-8 text-slate-900 dark:text-slate-200">
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
