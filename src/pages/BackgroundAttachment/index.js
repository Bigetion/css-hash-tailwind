import React from "react";

import PanelSection from "components/PanelSection";

export default function BackgroundAttachment() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Background Attachment</h1>
      </div>
      <PanelSection title="Fixed">
        <div class="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div
            class="w-full h-48 bg-fixed bg-center overflow-y-scroll"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80')`,
            }}
          >
            <div class="h-64"></div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Local">
        <div class="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div
            class="w-full h-48 bg-local bg-center overflow-y-scroll"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80')`,
            }}
          >
            <div class="h-64"></div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Scroll">
        <div class="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div
            class="w-full h-48 bg-scroll bg-center overflow-y-scroll"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80')`,
            }}
          >
            <div class="h-64"></div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
