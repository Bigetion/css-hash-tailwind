import React from "react";

import PanelSection from "components/PanelSection";

export default function Scale() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Scale</h1>
      </div>
      <PanelSection title="Scaling an element">
        <div className="flex sm:block overflow-scroll sm:overflow-visible scroll-p-8">
          <div className="flex items-center justify-around gap-12 sm:gap-4 font-mono font-bold p-8 px-12 sm:px-8 pb-10 shrink-0">
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-9">
                scale-75
              </p>
              <div className="relative">
                <div className="absolute inset-0">
                  <img
                    alt=""
                    className="w-24 h-24 object-cover rounded-lg opacity-25"
                    src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
                  />
                </div>
                <div className="relative z-10 transform scale-75">
                  <img
                    alt=""
                    className="w-24 h-24 object-cover rounded-lg shadow-xl"
                    src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black ring-opacity-10 rounded-lg" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-9">
                scale-100
              </p>
              <div className="relative">
                <div className="absolute inset-0">
                  <img
                    alt=""
                    className="w-24 h-24 object-cover rounded-lg opacity-25"
                    src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
                  />
                </div>
                <div className="relative z-10 transform scale-100">
                  <img
                    alt=""
                    className="w-24 h-24 object-cover rounded-lg shadow-xl"
                    src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black ring-opacity-10 rounded-lg" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-9">
                scale-125
              </p>
              <div className="relative">
                <div className="absolute inset-0">
                  <img
                    alt=""
                    className="w-24 h-24 object-cover rounded-lg opacity-25"
                    src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
                  />
                </div>
                <div className="relative z-10 transform scale-125">
                  <img
                    alt=""
                    className="w-24 h-24 object-cover rounded-lg shadow-xl"
                    src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black ring-opacity-10 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
