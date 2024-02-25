import React from "react";

import PanelSection from "components/PanelSection";

export default function HueRotate() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Hue Rotate</h1>
      </div>
      <PanelSection title="Rotating an element’s hue">
        <div className="flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8">
          <div className="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
                hue-rotate-15
              </p>
              <div className="relative filter hue-rotate-15">
                <img
                  alt=""
                  className="w-24 h-24 object-cover rounded-lg shadow-xl"
                  src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black ring-opacity-10 rounded-lg" />
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
                hue-rotate-90
              </p>
              <div className="relative filter hue-rotate-90">
                <img
                  alt=""
                  className="w-24 h-24 object-cover rounded-lg shadow-xl"
                  src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black ring-opacity-10 rounded-lg" />
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
                hue-rotate-180
              </p>
              <div className="relative filter hue-rotate-180">
                <img
                  alt=""
                  className="w-24 h-24 object-cover rounded-lg shadow-xl"
                  src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black ring-opacity-10 rounded-lg" />
              </div>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
                -hue-rotate-60
              </p>
              <div className="relative filter -hue-rotate-60">
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
      </PanelSection>
    </div>
  );
}
