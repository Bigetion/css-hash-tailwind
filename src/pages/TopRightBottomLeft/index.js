import React from "react";

import { purpleStripes } from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function TopRightBottomLeft() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Top Right Bottom Left</h1>
      </div>
      <PanelSection title="Placing a positioned element">
        <div className="grid grid-cols-3 grid-rows-3 place-items-center gap-4 font-mono text-white text-sm font-bold leading-6">
          <div
            className={`relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg ${purpleStripes}`}
          >
            <div className="p-4 w-14 h-14 absolute left-0 top-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg">
              01
            </div>
          </div>
          <div
            className={`relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg ${purpleStripes}`}
          >
            <div className="p-4 absolute inset-x-0 top-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg">
              02
            </div>
          </div>
          <div
            className={`relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg ${purpleStripes}`}
          >
            <div className="p-4 w-14 h-14 absolute right-0 top-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg">
              03
            </div>
          </div>
          <div
            className={`relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg ${purpleStripes}`}
          >
            <div className="p-4 w-14 absolute inset-y-0 left-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg">
              04
            </div>
          </div>
          <div
            className={`relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg ${purpleStripes}`}
          >
            <div className="p-4 absolute inset-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg">
              05
            </div>
          </div>
          <div
            className={`relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg ${purpleStripes}`}
          >
            <div className="p-4 w-14 absolute inset-y-0 right-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg">
              06
            </div>
          </div>
          <div
            className={`relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg ${purpleStripes}`}
          >
            <div className="p-4 w-14 h-14 absolute left-0 bottom-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg">
              07
            </div>
          </div>
          <div
            className={`relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg ${purpleStripes}`}
          >
            <div className="p-4 absolute inset-x-0 bottom-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg">
              08
            </div>
          </div>
          <div
            className={`relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg ${purpleStripes}`}
          >
            <div className="p-4 w-14 h-14 absolute right-0 bottom-0 flex items-center justify-center bg-purple-500 shadow-lg rounded-lg">
              09
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
