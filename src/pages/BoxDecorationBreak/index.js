import React from "react";

import PanelSection from "components/PanelSection";

export default function BoxDecorationBreak() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Box Decoration Break</h1>
      </div>
      <PanelSection title="">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-10 font-bold mb-3">
          <div className="flex flex-col">
            <p className="font-medium text-sm text-slate-500 font-mono mb-3">
              box-decoration-slice
            </p>
            <div className="text-5xl font-extrabold leading-none tracking-tight">
              <span className="box-decoration-slice text-white bg-gradient-to-r from-indigo-600 to-pink-500 leading-10 px-2">
                Hello
                <br />
                World
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-sm text-slate-500 font-mono mb-3">
              box-decoration-clone
            </p>
            <div className="text-5xl font-extrabold leading-none tracking-tight">
              <span className="box-decoration-clone text-white bg-gradient-to-r from-indigo-600 to-pink-500 leading-10 px-2">
                Hello
                <br />
                World
              </span>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
