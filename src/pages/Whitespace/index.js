import React from "react";

import PanelSection from "components/PanelSection";

export default function Whitespace() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Whitespace</h1>
      </div>
      <PanelSection title="Normal" paddingless>
        <div className="bg-white p-8 shadow-xl text-slate-700 max-w-md mx-auto overflow-auto text-sm leading-6 sm:text-base sm:leading-7">
          <div className="whitespace-normal">
            Hey everyone! It's almost 2022 and we still don't know if there is
            aliens living among us, or do we? Maybe the person writing this is
            an alien. You will never know.
          </div>
        </div>
      </PanelSection>
      <PanelSection title="No Wrap" paddingless>
        <div className="bg-white px-6 py-8 shadow-xl text-slate-700 max-w-md mx-auto overflow-auto text-sm leading-6 sm:text-base sm:leading-7">
          <div className="whitespace-nowrap">
            Hey everyone! It's almost 2022 and we still don't know if there is
            aliens living among us, or do we? Maybe the person writing this is
            an alien. You will never know.
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Pre" paddingless>
        <div className="bg-white px-6 py-8 shadow-xl text-slate-700 max-w-md mx-auto overflow-auto text-sm leading-6 sm:text-base sm:leading-7">
          <div className="whitespace-pre">
            Hey everyone! It's almost 2022 and we still don't know if there is
            aliens living among us, or do we? Maybe the person writing this is
            an alien. You will never know.
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Pre Line" paddingless>
        <div className="bg-white px-6 py-8 shadow-xl text-slate-700 max-w-md mx-auto overflow-auto text-sm leading-6 sm:text-base sm:leading-7">
          <div className="whitespace-pre-line">
            Hey everyone! It's almost 2022 and we still don't know if there is
            aliens living among us, or do we? Maybe the person writing this is
            an alien. You will never know.
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Pre Wrap" paddingless>
        <div className="bg-white px-6 py-8 shadow-xl text-slate-700 max-w-md mx-auto overflow-auto text-sm leading-6 sm:text-base sm:leading-7">
          <div className="whitespace-pre-wrap">
            Hey everyone! It's almost 2022 and we still don't know if there is
            aliens living among us, or do we? Maybe the person writing this is
            an alien. You will never know.
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Break Spaces" paddingless>
        <div className="bg-white px-6 py-8 shadow-xl text-slate-700 max-w-md mx-auto overflow-auto text-sm leading-6 sm:text-base sm:leading-7">
          <div className="whitespace-break-spaces">
            Hey everyone! It's almost 2022 and we still don't know if there is
            aliens living among us, or do we? Maybe the person writing this is
            an alien. You will never know.
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
