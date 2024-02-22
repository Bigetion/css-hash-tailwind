import React from "react";

import PanelSection from "components/PanelSection";

export default function BackgroundOrigin() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Background Origin</h1>
      </div>
      <PanelSection title="Setting the background origin">
        <div className="flex sm:block overflow-scroll sm:overflow-visible scroll-p-8">
          <div className="flex items-center justify-around gap-12 sm:gap-4 font-mono font-bold shrink-0 p-8">
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
                bg-origin-border
              </p>
              <div
                className="bg-origin-border bg-cover p-3 border-4 border-white border-opacity-75 border-dashed bg-slate-300 bg-no-repeat w-24 h-24 object-cover rounded-lg shadow-xl"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80)",
                }}
              />
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
                bg-origin-padding
              </p>
              <div
                className="bg-origin-padding bg-cover p-3 border-4 border-white border-opacity-75 border-dashed bg-slate-300 bg-no-repeat w-24 h-24 object-cover rounded-lg shadow-xl"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80)",
                }}
              />
            </div>
            <div className="flex flex-col items-center shrink-0">
              <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
                bg-origin-content
              </p>
              <div
                className="bg-origin-content bg-cover p-3 border-4 border-white border-opacity-75 border-dashed bg-slate-300 bg-no-repeat w-24 h-24 object-cover rounded-lg shadow-xl"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80)",
                }}
              />
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
