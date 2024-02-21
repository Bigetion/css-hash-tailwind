import React from "react";

import PanelSection from "components/PanelSection";

export default function VerticalAlign() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Vertical Align</h1>
      </div>
      <PanelSection title="Baseline">
        <div className="">
          <div className="leading-none relative">
            <span className="w-1 h-8 inline-block align-baseline bg-blue-300">
              <span className="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>
              <span className="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>
            </span>
            <span className="relative z-10">.align-baseline</span>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Top">
        <div className="">
          <div className="leading-none relative">
            <span className="w-1 h-8 inline-block align-top bg-blue-300">
              <span className="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>
              <span className="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>
            </span>
            <span className="relative z-10">.align-top</span>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Middle">
        <div className="">
          <div className="leading-none relative">
            <span className="w-1 h-8 inline-block align-middle bg-blue-300">
              <span className="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>
              <span className="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>
            </span>
            <span className="relative z-10">.align-middle</span>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Bottom">
        <div className="">
          <div className="leading-none relative">
            <span className="w-1 h-8 inline-block align-bottom bg-blue-300">
              <span className="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>
              <span className="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>
            </span>
            <span className="relative z-10">.align-bottom</span>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Text top">
        <div className="">
          <div className="leading-none relative">
            <span className="w-1 h-8 inline-block align-text-top bg-blue-300">
              <span className="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>
              <span className="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>
            </span>
            <span className="relative z-10">.align-text-top</span>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Text bottom">
        <div className="">
          <div className="leading-none relative">
            <span className="w-1 h-8 inline-block align-text-bottom bg-blue-300">
              <span className="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>
              <span className="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>
            </span>
            <span className="relative z-10">.align-text-bottom</span>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
