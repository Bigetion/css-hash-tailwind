import React from "react";

import PanelSection from "components/PanelSection";

export default function ObjectPosition() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Object Position</h1>
      </div>
      <PanelSection title="Usage">
        <div className="">
          <div className="flex justify-around mb-8">
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .object-left-top
              </p>
              <img
                alt=""
                className="mx-auto bg-gray-400 w-24 h-24 object-left-top object-none"
                src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80"
              />
            </div>
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .object-top
              </p>
              <img
                alt=""
                className="mx-auto bg-gray-400 w-24 h-24 object-top object-none"
                src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80"
              />
            </div>
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .object-right-top
              </p>
              <img
                alt=""
                className="mx-auto bg-gray-400 w-24 h-24 object-right-top object-none"
                src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80"
              />
            </div>
          </div>
          <div className="flex justify-around mb-8">
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .object-left
              </p>
              <img
                alt=""
                className="mx-auto bg-gray-400 w-24 h-24 object-left object-none"
                src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80"
              />
            </div>
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .object-center
              </p>
              <img
                alt=""
                className="mx-auto bg-gray-400 w-24 h-24 object-center object-none"
                src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80"
              />
            </div>
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .object-right
              </p>
              <img
                alt=""
                className="mx-auto bg-gray-400 w-24 h-24 object-right object-none"
                src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80"
              />
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .object-left-bottom
              </p>
              <img
                alt=""
                className="mx-auto bg-gray-400 w-24 h-24 object-left-bottom object-none"
                src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80"
              />
            </div>
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .object-bottom
              </p>
              <img
                alt=""
                className="mx-auto bg-gray-400 w-24 h-24 object-bottom object-none"
                src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80"
              />
            </div>
            <div className="flex-1">
              <p className="text-center text-sm text-gray-600 mb-1">
                .object-right-bottom
              </p>
              <img
                alt=""
                className="mx-auto bg-gray-400 w-24 h-24 object-right-bottom object-none"
                src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80"
              />
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
