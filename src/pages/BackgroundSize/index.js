import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function BackgroundSize() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Background Size</h1>
      </div>
      <PanelSection title="Auto">
        <div className="relative flex items-center justify-center h-48 rounded-lg w-56 sm:w-96 mx-auto overflow-hidden enuxVF">
          <div className={`absolute inset-0 ${stripes.gray}`} />
          <div
            className="relative z-10 w-full h-full bg-auto bg-no-repeat bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=160&q=80')`,
            }}
          />
        </div>
      </PanelSection>
      <PanelSection title="Cover">
        <div className="relative flex items-center justify-center rounded-lg overflow-hidden w-56 sm:w-96 mx-auto">
          <div className={`absolute inset-0 ${stripes.gray}`} />
          <div
            className="relative z-10 w-full h-48 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&h=640&q=80')`,
            }}
          />
        </div>
      </PanelSection>
      <PanelSection title="Contain">
        <div className="relative flex items-center justify-center h-48 rounded-lg w-56 sm:w-96 mx-auto overflow-hidden enuxVF">
          <div className={`absolute inset-0 ${stripes.gray}`} />
          <div
            className="relative z-10 w-full h-full bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&h=640&q=80')`,
            }}
          />
        </div>
      </PanelSection>
    </div>
  );
}
