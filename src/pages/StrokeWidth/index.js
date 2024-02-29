import React from "react";

import PanelSection from "components/PanelSection";

export default function StrokeWidth() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Stroke Width</h1>
      </div>
      <PanelSection title="Setting the stroke width">
        <div className="relative rounded-xl overflow-auto p-8">
          <div className="flex items-center justify-center space-x-8">
            <svg
              className="stroke-indigo-500 stroke-1"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="23" strokeLinejoin="round"></circle>
              <path
                d="M23 1C23 1 15 10.4901 15 24C15 37.5099 23 47 23 47"
                strokeLinejoin="round"
              ></path>
              <path
                d="M25 1C25 1 33 10.4901 33 24C33 37.5099 25 47 25 47"
                strokeLinejoin="round"
              ></path>
              <path d="M1 24H47"></path>
            </svg>
            <svg
              className="stroke-indigo-500 stroke-2"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="23" strokeLinejoin="round"></circle>
              <path
                d="M23 1C23 1 15 10.4901 15 24C15 37.5099 23 47 23 47"
                strokeLinejoin="round"
              ></path>
              <path
                d="M25 1C25 1 33 10.4901 33 24C33 37.5099 25 47 25 47"
                strokeLinejoin="round"
              ></path>
              <path d="M1 24H47"></path>
            </svg>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
