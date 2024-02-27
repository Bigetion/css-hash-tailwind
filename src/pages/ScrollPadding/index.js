import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function ScrollPadding() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Scroll Padding</h1>
      </div>
      <PanelSection title="Setting the scroll padding" paddingless>
        <div
          className={`${stripes.pink} w-6 absolute left-0 top-0 bottom-0 rounded-l-lg`}
        />
        <div
          className="w-full flex gap-8 snap-x scroll-pl-6 overflow-x-auto py-14"
          style={{ paddingRight: "calc(100% - 21.5rem)" }}
        >
          <div className="snap-start shrink-0 pl-6">
            <img
              alt=""
              className="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
              src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
          </div>
          <div className="snap-start shrink-0">
            <img
              alt=""
              className="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
              src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
          </div>
          <div className="snap-start shrink-0">
            <img
              alt=""
              className="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
              src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
          </div>
          <div className="snap-start shrink-0">
            <img
              alt=""
              className="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
              src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
