import React from "react";

import PanelSection from "components/PanelSection";

export default function BorderStyle() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Border Style</h1>
      </div>
      <PanelSection title="Usage">
        <div className="">
          <div className="block sm:flex sm:justify-around">
            <div className="sm:w-3/5 sm:mb-0 flex justify-around mb-6">
              <div className="flex-1">
                <p className="text-center text-sm text-gray-600 mb-1">
                  .border-solid
                </p>
                <div className="mx-auto w-24 h-24 bg-gray-400 border-4 border-gray-600 border-solid"></div>
              </div>
              <div className="flex-1">
                <p className="text-center text-sm text-gray-600 mb-1">
                  .border-dashed
                </p>
                <div className="mx-auto w-24 h-24 bg-gray-400 border-4 border-gray-600 border-dashed"></div>
              </div>
              <div className="flex-1">
                <p className="text-center text-sm text-gray-600 mb-1">
                  .border-dotted
                </p>
                <div className="mx-auto w-24 h-24 bg-gray-400 border-4 border-gray-600 border-dotted"></div>
              </div>
            </div>
            <div className="sm:w-2/5 flex justify-around">
              <div className="flex-1">
                <p className="text-center text-sm text-gray-600 mb-1">
                  .border-double
                </p>
                <div className="mx-auto w-24 h-24 bg-gray-400 border-4 border-gray-600 border-double"></div>
              </div>
              <div className="flex-1">
                <p className="text-center text-sm text-gray-600 mb-1">
                  .border-none
                </p>
                <div className="mx-auto w-24 h-24 bg-gray-400 border-4 border-gray-600 border-none"></div>
              </div>
              <div className="flex-1 sm:hidden"></div>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
