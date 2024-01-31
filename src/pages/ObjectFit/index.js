import React from "react";

import { grayStripes } from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function ObjectFit() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Object Fit</h1>
      </div>
      <PanelSection title="Resizing to cover a container">
        <div className="text-center rounded-lg overflow-hidden w-56 sm:w-96 mx-auto">
          <img
            alt=""
            className="object-cover h-48 w-full "
            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
          />
        </div>
      </PanelSection>
      <PanelSection title="Containing an element">
        <div className="relative rounded-lg text-center overflow-hidden w-56 sm:w-96 mx-auto">
          <div className={`absolute inset-0 opacity-50 ${grayStripes}`} />
          <img
            alt=""
            className="relative z-10 object-contain h-48 w-full"
            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
          />
        </div>
      </PanelSection>
      <PanelSection title="Stretching to fit a container">
        <div className="rounded-lg text-center overflow-hidden w-56 sm:w-96 mx-auto">
          <img
            alt=""
            className="object-fill h-48 w-full"
            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
          />
        </div>
      </PanelSection>
      <PanelSection title="Scaling down if too large">
        <div className="relative rounded-lg text-center overflow-hidden w-56 sm:w-96 mx-auto">
          <div className={`absolute inset-0 opacity-50 ${grayStripes}`} />
          <img
            alt=""
            className="relative z-10 object-scale-down h-48 w-full"
            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=160&q=80"
          />
        </div>
      </PanelSection>
      <PanelSection title="Using an element’s original size">
        <div className="relative rounded-lg text-center overflow-hidden w-56 sm:w-96 mx-auto">
          <div className="absolute inset-0 opacity-50 bg-stripes-gray" />
          <img
            alt=""
            className="relative z-10 object-none h-48 w-full"
            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
          />
        </div>
      </PanelSection>
    </div>
  );
}
