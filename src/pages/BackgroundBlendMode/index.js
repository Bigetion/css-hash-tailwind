import React from "react";

import PanelSection from "components/PanelSection";

export default function BackgroundBlendMode() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Background Blend Mode</h1>
      </div>
      <PanelSection title="Setting the background blend mode">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-white text-sm text-center font-bold leading-6">
          {[
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ].map((type) => {
            return (
              <div key={type} className="">
                <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3">
                  bg-blend-{type}
                </p>
                <div className="group relative mx-auto w-20 h-20 rounded-lg">
                  <div
                    className={`relative z-10 w-full h-full rounded-md bg-left-top ring-1 ring-black ring-opacity-10 ring-inset shadow-lg bg-green-500 bg-blend-${type}`}
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </PanelSection>
    </div>
  );
}
