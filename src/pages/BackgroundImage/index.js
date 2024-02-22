import React from "react";

import PanelSection from "components/PanelSection";

export default function BackgroundImage() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Background Image</h1>
      </div>
      <PanelSection title="Linear Gradient">
        <div className="space-y-4">
          <div className="h-14 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          <div className="h-14 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500"></div>
          <div className="h-14 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
          <div className="h-14 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>
      </PanelSection>
    </div>
  );
}
