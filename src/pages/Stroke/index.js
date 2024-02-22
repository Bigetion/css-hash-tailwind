import React from "react";

import PanelSection from "components/PanelSection";

export default function Stroke() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Stroke</h1>
      </div>
      <PanelSection title="Usage">
        <div className="relative rounded-xl overflow-auto p-8">
          <div className="flex items-center justify-center">
            <svg
              className="stroke-cyan-500 h-10"
              viewBox="0 0 48 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13C1 10.2386 3.23858 8 6 8H13.4914C14.3844 8 15.1691 7.40805 15.4144 6.54944L16.5856 2.45056C16.8309 1.59196 17.6156 1 18.5086 1H29.4914C30.3844 1 31.1691 1.59195 31.4144 2.45056L32.5856 6.54944C32.8309 7.40804 33.6156 8 34.5086 8H42C44.7614 8 47 10.2386 47 13V34C47 36.7614 44.7614 39 42 39H6C3.23858 39 1 36.7614 1 34V13Z"
                strokeWidth="2"
              ></path>
              <circle cx="24" cy="23" r="9" strokeWidth="2"></circle>
            </svg>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
