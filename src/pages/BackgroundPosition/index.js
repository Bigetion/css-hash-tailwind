import React from "react";

import PanelSection from "components/PanelSection";

export default function BackgroundPosition() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Background Position</h1>
      </div>
      <PanelSection title="Usage">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="flex justify-around mb-8">
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .bg-left-top
              </p>
              <div
                className="mx-auto bg-gray-400 w-24 h-24 bg-left-top bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80')`,
                }}
              ></div>
            </div>
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">.bg-top</p>
              <div
                className="mx-auto bg-gray-400 w-24 h-24 bg-top bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80')`,
                }}
              ></div>
            </div>
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .bg-right-top
              </p>
              <div
                className="mx-auto bg-gray-400 w-24 h-24 bg-right-top bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80')`,
                }}
              ></div>
            </div>
          </div>
          <div className="flex justify-around mb-8">
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">.bg-left</p>
              <div
                className="mx-auto bg-gray-400 w-24 h-24 bg-left bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80')`,
                }}
              ></div>
            </div>
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .bg-center
              </p>
              <div
                className="mx-auto bg-gray-400 w-24 h-24 bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80')`,
                }}
              ></div>
            </div>
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .bg-right
              </p>
              <div
                className="mx-auto bg-gray-400 w-24 h-24 bg-right bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80')`,
                }}
              ></div>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .bg-left-bottom
              </p>
              <div
                className="mx-auto bg-gray-400 w-24 h-24 bg-left-bottom bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80')`,
                }}
              ></div>
            </div>
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .bg-bottom
              </p>
              <div
                className="mx-auto bg-gray-400 w-24 h-24 bg-bottom bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80')`,
                }}
              ></div>
            </div>
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .bg-right-bottom
              </p>
              <div
                className="mx-auto bg-gray-400 w-24 h-24 bg-right-bottom bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80')`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
