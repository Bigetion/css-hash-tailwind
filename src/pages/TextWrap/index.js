import React from "react";

import PanelSection from "components/PanelSection";

export default function TextWrap() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Text Wrap</h1>
      </div>
      <PanelSection title="Wrap" paddingless>
        <div className="grid gap-4 mx-auto max-w-sm bg-white shadow-xl p-8 text-slate-700 text-wrap">
          <h3 className="text-xl font-semibold text-slate-900">
            Beloved Manhattan soup stand closes
          </h3>
          <p className="text-sm/6">
            New Yorkers are facing the winter chill with less warmth this year
            as the city's most revered soup stand unexpectedly shutters,
            following a series of events that have left the community puzzled.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="No Wrap" paddingless>
        <div className="grid gap-4 bg-white px-6 py-8 shadow-xl text-slate-700 max-w-sm mx-auto overflow-auto text-nowrap">
          <h3 className="text-xl font-semibold text-slate-900">
            Beloved Manhattan soup stand closes
          </h3>
          <p className="text-sm/6">
            New Yorkers are facing the winter chill with less warmth this year
            as the city's most revered soup stand unexpectedly shutters,
            following a series of events that have left the community puzzled.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Balance" paddingless>
        <div className="grid gap-4 mx-auto max-w-sm bg-white shadow-xl p-8 text-slate-700">
          <h3 className="text-balance text-xl font-semibold text-slate-900">
            Beloved Manhattan soup stand closes
          </h3>
          <p className="text-sm/6">
            New Yorkers are facing the winter chill with less warmth this year
            as the city's most revered soup stand unexpectedly shutters,
            following a series of events that have left the community puzzled.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Pretty" paddingless>
        <div className="grid gap-4 mx-auto max-w-sm bg-white shadow-xl p-8 text-slate-700 text-pretty">
          <h3 className="text-xl font-semibold text-slate-900">
            Beloved Manhattan soup stand closes
          </h3>
          <p className="text-sm/6">
            New Yorkers are facing the winter chill with less warmth this year
            as the city's most revered soup stand unexpectedly shutters,
            following a series of events that have left the community puzzled.
          </p>
        </div>
      </PanelSection>
    </div>
  );
}
