import React from "react";

import PanelSection from "components/PanelSection";

export default function BackgroundRepeat() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Background Repeat</h1>
      </div>
      <PanelSection title="Repeat">
        <div class="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div
            class="w-full bg-gray-400 h-48 bg-center bg-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80')`,
            }}
          ></div>
        </div>
      </PanelSection>
      <PanelSection title="No Repeat">
        <div class="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div
            class="w-full bg-gray-400 h-48 bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80')`,
            }}
          ></div>
        </div>
      </PanelSection>
      <PanelSection title="Repeat Horizontally">
        <div class="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div
            class="w-full bg-gray-400 h-48 bg-center bg-repeat-x"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80')`,
            }}
          ></div>
        </div>
      </PanelSection>
      <PanelSection title="Repeat Vertically">
        <div class="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div
            class="w-full bg-gray-400 h-48 bg-center bg-repeat-y"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80')`,
            }}
          ></div>
        </div>
      </PanelSection>
    </div>
  );
}
