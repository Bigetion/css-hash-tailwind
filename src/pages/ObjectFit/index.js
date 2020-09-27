import React from "react";

import Layout from "layout";
import PanelSection from "components/PanelSection";

export default function ObjectFit() {
  return (
    <Layout>
      <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
        <div className="flex items-center">
          <h1 className="text-3xl">Object Fit</h1>
        </div>
        <PanelSection title="Contain">
          <div className="rounded-t-lg overflow-hidden border border-gray-400 p-4">
            <div className="p-4">
              <div className="bg-gray-400">
                <img
                  className="h-48 w-full object-contain"
                  src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Cover">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="p-4">
              <div className="bg-gray-400">
                <img
                  className="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Fill">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="p-4">
              <div className="bg-gray-400">
                <img
                  className="h-48 w-full object-fill"
                  src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="None">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="p-4">
              <div className="bg-gray-400">
                <img
                  className="h-48 w-full object-none"
                  src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Scale down">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="p-4">
              <div className="bg-gray-400">
                <img
                  className="h-48 w-full object-scale-down"
                  src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=128&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </PanelSection>
      </div>
    </Layout>
  );
}
