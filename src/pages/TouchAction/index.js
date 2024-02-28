import React from "react";

import PanelSection from "components/PanelSection";

export default function TouchAction() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Touch Action</h1>
      </div>
      <PanelSection title="Setting the touch action">
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-14 font-mono font-bold">
          <div className="flex flex-col items-center">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              touch-auto
            </p>
            <div className="grid w-full h-48 overflow-auto touch-auto rounded-lg shadow-lg">
              <img
                alt=""
                className="col-span-1 col-start-1 col-end-1 max-w-none"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
                style={{ width: "150%" }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              touch-none
            </p>
            <div className="w-full h-48 overflow-auto touch-none rounded-lg shadow-lg">
              <img
                alt=""
                className="max-w-none"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
                style={{ width: "150%" }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              touch-pan-x
            </p>
            <div className="w-full h-48 overflow-auto touch-pan-x rounded-lg shadow-lg">
              <img
                alt=""
                className="max-w-none"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
                style={{ width: "150%" }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
              touch-pan-y
            </p>
            <div className="w-full h-48 overflow-auto touch-pan-y rounded-lg shadow-lg">
              <img
                alt=""
                className="max-w-none"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
                style={{ width: "150%" }}
              />
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
