import React from "react";

import PanelSection from "components/PanelSection";

export default function GradientColorStops() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Gradient Color Stops</h1>
      </div>
      <PanelSection title="Starting Color">
        <div className="mx-5">
          <div className="relative h-14">
            <div className="h-12 flex flex-col items-center absolute top-0 left-0 -ml-4">
              <div className="h-12 w-8 bg-indigo-500 rounded-t rounded-b-xl" />
              <div className="mt-2 w-0.5 h-2 bg-gray-900 bg-opacity-30"></div>
            </div>
          </div>
          <div className="h-10 rounded-lg bg-gradient-to-r from-indigo-500"></div>
        </div>
      </PanelSection>
      <PanelSection title="Ending Color">
        <div className="mx-5">
          <div className="relative h-14">
            <div className="h-12 flex flex-col items-center absolute top-0 left-0 -ml-4">
              <div className="h-12 w-8 bg-cyan-500 rounded-t rounded-b-xl" />
              <div className="mt-2 w-0.5 h-2 bg-gray-900 bg-opacity-30"></div>
            </div>
            <div className="h-12 flex flex-col items-center absolute top-0 right-0 -mr-4">
              <div className="h-12 w-8 bg-blue-500 rounded-t rounded-b-xl" />
              <div className="mt-2 w-0.5 h-2 bg-gray-900 bg-opacity-30"></div>
            </div>
          </div>
          <div className="h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        </div>
      </PanelSection>
      <PanelSection title="Middle Color">
        <div className="mx-5">
          <div className="relative h-14">
            <div className="h-12 flex flex-col items-center absolute top-0 left-0 -ml-4">
              <div className="h-12 w-8 bg-indigo-500 rounded-t rounded-b-xl" />
              <div className="mt-2 w-0.5 h-2 bg-gray-900 bg-opacity-30"></div>
            </div>
            <div className="h-12 flex flex-col items-center absolute top-0 left-1/2 -ml-4">
              <div className="h-12 w-8 bg-purple-500 rounded-t rounded-b-xl" />
              <div className="mt-2 w-0.5 h-2 bg-gray-900 bg-opacity-30"></div>
            </div>
            <div className="h-12 flex flex-col items-center absolute top-0 right-0 -mr-4">
              <div className="h-12 w-8 bg-pink-500 rounded-t rounded-b-xl" />
              <div className="mt-2 w-0.5 h-2 bg-gray-900 bg-opacity-30"></div>
            </div>
          </div>
          <div className="h-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        </div>
      </PanelSection>
      <PanelSection title="Specifying stop positions">
        <div className="mx-5">
          <div className="relative h-14">
            <div
              className="h-12 flex flex-col items-center absolute top-0 -ml-4"
              style={{ left: "10%" }}
            >
              <div className="h-12 w-8 bg-indigo-500 rounded-t rounded-b-xl" />
              <div className="mt-2 w-0.5 h-2 bg-gray-900 bg-opacity-30"></div>
              <div className="absolute top-0 left-0 w-full h-8 flex items-center justify-center text-xs font-semibold text-white font-mono">
                10%
              </div>
            </div>
            <div
              className="h-12 flex flex-col items-center absolute top-0 -ml-4"
              style={{ left: "30%" }}
            >
              <div className="h-12 w-8 bg-sky-500 rounded-t rounded-b-xl" />
              <div className="mt-2 w-0.5 h-2 bg-gray-900 bg-opacity-30"></div>
              <div className="absolute top-0 left-0 w-full h-8 flex items-center justify-center text-xs font-semibold text-white font-mono">
                30%
              </div>
            </div>
            <div
              className="h-12 flex flex-col items-center absolute top-0 -mr-4"
              style={{ right: "10%" }}
            >
              <div className="h-12 w-8 bg-emerald-500 rounded-t rounded-b-xl" />
              <div className="mt-2 w-0.5 h-2 bg-gray-900 bg-opacity-30"></div>
              <div className="absolute top-0 left-0 w-full h-8 flex items-center justify-center text-xs font-semibold text-white font-mono">
                90%
              </div>
            </div>
          </div>
          <div className="h-10 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
        </div>
      </PanelSection>
      <PanelSection title="Hover, focus, and other states">
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md"
          >
            Hover me
          </button>
        </div>
      </PanelSection>
    </div>
  );
}
