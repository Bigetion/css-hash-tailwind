import React from "react";

import PanelSection from "components/PanelSection";

export default function Cursor() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Cursor</h1>
      </div>
      <PanelSection title="Setting the cursor style">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-around">
          <button
            type="button"
            className="w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer"
            tabIndex={-1}
          >
            Submit
          </button>
          <button
            type="button"
            className="w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white text-sm font-semibold rounded-md shadow focus:outline-none cursor-progress"
            tabIndex={-1}
          >
            Saving...
          </button>
          <button
            type="button"
            className="w-full sm:w-auto py-2 px-3 bg-indigo-300 text-white text-sm font-semibold rounded-md shadow focus:outline-none cursor-not-allowed"
            tabIndex={-1}
            disabled
          >
            Confirm
          </button>
        </div>
      </PanelSection>
    </div>
  );
}
