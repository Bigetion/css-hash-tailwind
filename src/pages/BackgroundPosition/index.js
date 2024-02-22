import React from "react";

import PanelSection from "components/PanelSection";

export default function BackgroundPosition() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Background Position</h1>
      </div>
      <PanelSection title="Setting the background position" paddingless>
        <div className="overflow-x-auto overflow-y-hidden snap-x scroll-p-4 flex sm:grid sm:grid-cols-3 sm:gap-16 p-8 items-end pt-16">
          <div className="relative snap-always snap-start w-32 shrink-0 sm:w-auto">
            <p className="transform absolute top-0 inset-x-0 -translate-y-8 font-medium text-sm text-slate-500 font-mono text-center mb-3">
              bg-left-top
            </p>
            <div className="group relative mx-auto w-20 h-20 rounded-lg">
              <div
                className="relative z-10 w-full h-full rounded-md bg-left-top ring-1 ring-black ring-opacity-10 ring-inset shadow-lg"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80)",
                }}
              />
              <img
                alt=""
                className="absolute top-0 left-0 rounded-md overflow-hidden w-32 h-32 opacity-0 sm:group-hover:opacity-25 max-w-none"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
              />
            </div>
          </div>
          <div className="relative snap-always snap-start w-32 shrink-0 sm:w-auto">
            <p className="transform absolute top-0 inset-x-0 -translate-y-8 font-medium text-sm text-slate-500 font-mono text-center mb-3">
              bg-top
            </p>
            <div className="group relative mx-auto w-20 h-20 rounded-lg">
              <div
                className="relative z-10 w-full h-full rounded-md bg-top ring-1 ring-black ring-opacity-10 ring-inset shadow-lg"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80)",
                }}
              />
              <img
                alt=""
                className="absolute top-0 -left-6 rounded-md overflow-hidden w-32 h-32 opacity-0 sm:group-hover:opacity-25 max-w-none"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
              />
            </div>
          </div>
          <div className="relative snap-always snap-start w-32 shrink-0 sm:w-auto">
            <p className="transform absolute top-0 inset-x-0 -translate-y-8 font-medium text-sm text-slate-500 font-mono text-center mb-3">
              bg-right-top
            </p>
            <div className="group relative mx-auto w-20 h-20 rounded-lg">
              <div
                className="relative z-10 w-full h-full rounded-md bg-right-top ring-1 ring-black ring-opacity-10 ring-inset shadow-lg"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80)",
                }}
              />
              <img
                alt=""
                className="absolute top-0 right-0 rounded-md overflow-hidden w-32 h-32 opacity-0 sm:group-hover:opacity-25 max-w-none"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
              />
            </div>
          </div>
          <div className="relative snap-always snap-start w-32 shrink-0 sm:w-auto">
            <p className="transform absolute top-0 inset-x-0 -translate-y-8 font-medium text-sm text-slate-500 font-mono text-center mb-3">
              bg-left
            </p>
            <div className="group relative mx-auto w-20 h-20 rounded-lg">
              <div
                className="relative z-10 w-full h-full rounded-md bg-left ring-1 ring-black ring-opacity-10 ring-inset shadow-lg"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80)",
                }}
              />
              <img
                alt=""
                className="absolute -top-6 left-0 rounded-md overflow-hidden w-32 h-32 opacity-0 sm:group-hover:opacity-25 max-w-none"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
              />
            </div>
          </div>
          <div className="relative snap-always snap-start w-32 shrink-0 sm:w-auto">
            <p className="transform absolute top-0 inset-x-0 -translate-y-8 font-medium text-sm text-slate-500 font-mono text-center mb-3">
              bg-center
            </p>
            <div className="group relative mx-auto w-20 h-20 rounded-lg">
              <div
                className="relative z-10 w-full h-full rounded-md bg-center ring-1 ring-black ring-opacity-10 ring-inset shadow-lg"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80)",
                }}
              />
              <img
                alt=""
                className="absolute -top-6 -left-6 rounded-md overflow-hidden w-32 h-32 opacity-0 sm:group-hover:opacity-25 max-w-none"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
              />
            </div>
          </div>
          <div className="relative snap-always snap-start w-32 shrink-0 sm:w-auto">
            <p className="transform absolute top-0 inset-x-0 -translate-y-8 font-medium text-sm text-slate-500 font-mono text-center mb-3">
              bg-right
            </p>
            <div className="group relative mx-auto w-20 h-20 rounded-lg">
              <div
                className="relative z-10 w-full h-full rounded-md bg-right ring-1 ring-black ring-opacity-10 ring-inset shadow-lg"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80)",
                }}
              />
              <img
                alt=""
                className="absolute -top-6 right-0 rounded-md overflow-hidden w-32 h-32 opacity-0 sm:group-hover:opacity-25 max-w-none"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
              />
            </div>
          </div>
          <div className="relative snap-always snap-start w-32 shrink-0 sm:w-auto">
            <p className="transform absolute top-0 inset-x-0 -translate-y-8 font-medium text-sm text-slate-500 font-mono text-center mb-3">
              bg-left-bottom
            </p>
            <div className="group relative mx-auto w-20 h-20 rounded-lg">
              <div
                className="relative z-10 w-full h-full rounded-md bg-left-bottom ring-1 ring-black ring-opacity-10 ring-inset shadow-lg"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80)",
                }}
              />
              <img
                alt=""
                className="absolute -top-12 left-0 rounded-md overflow-hidden w-32 h-32 opacity-0 sm:group-hover:opacity-25 max-w-none"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
              />
            </div>
          </div>
          <div className="relative snap-always snap-start w-32 shrink-0 sm:w-auto">
            <p className="transform absolute top-0 inset-x-0 -translate-y-8 font-medium text-sm text-slate-500 font-mono text-center mb-3">
              bg-bottom
            </p>
            <div className="group relative mx-auto w-20 h-20 rounded-lg">
              <div
                className="relative z-10 w-full h-full rounded-md bg-bottom ring-1 ring-black ring-opacity-10 ring-inset shadow-lg"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80)",
                }}
              />
              <img
                alt=""
                className="absolute -top-12 -left-6 rounded-md overflow-hidden w-32 h-32 opacity-0 sm:group-hover:opacity-25 max-w-none"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
              />
            </div>
          </div>
          <div className="relative snap-always snap-start w-48 -mx-8 shrink-0 sm:w-auto">
            <p className="transform absolute top-0 inset-x-0 -translate-y-8 font-medium text-sm text-slate-500 font-mono text-center mb-3">
              bg-right-bottom
            </p>
            <div className="group relative mx-auto w-20 h-20 rounded-lg">
              <div
                className="relative z-10 w-full h-full rounded-md bg-right-bottom ring-1 ring-black ring-opacity-10 ring-inset shadow-lg"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80)",
                }}
              />
              <img
                alt=""
                className="absolute -top-12 right-0 rounded-md overflow-hidden w-32 h-32 opacity-0 sm:group-hover:opacity-25 max-w-none"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
              />
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
