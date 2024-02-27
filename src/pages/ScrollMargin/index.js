import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function ScrollMargin() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Scroll Margin</h1>
      </div>
      <PanelSection title="Setting the scroll margin" paddingless>
        <div
          className="w-full flex gap-12 snap-x overflow-x-auto py-14"
          style={{ paddingRight: "calc(100% - 21.5rem)" }}
        >
          <div className="snap-start scroll-ml-6 shrink-0 relative pl-6">
            <div
              className={`${stripes.pink} w-6 absolute top-0 left-0 bottom-0`}
            />
            <img
              alt=""
              className="relative shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
              src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
          </div>
          <div className="snap-start scroll-ml-6 shrink-0 relative">
            <div
              className={`${stripes.pink} w-6 absolute top-0 -left-6 bottom-0`}
            />
            <img
              alt=""
              className="relative shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
              src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
          </div>
          <div className="snap-start scroll-ml-6 shrink-0 relative">
            <div
              className={`${stripes.pink} w-6 absolute top-0 -left-6 bottom-0`}
            />
            <img
              alt=""
              className="relative shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
              src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
          </div>
          <div className="snap-start scroll-ml-6 shrink-0 relative">
            <div
              className={`${stripes.pink} w-6 absolute top-0 -left-6 bottom-0`}
            />
            <img
              alt=""
              className="relative shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
              src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
