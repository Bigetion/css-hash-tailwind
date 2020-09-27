import React from "react";

import Layout from "layout";
import PanelSection from "components/PanelSection";

export default function Display() {
  return (
    <Layout>
      <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
        <div className="flex items-center">
          <h1 className="text-3xl">Display</h1>
        </div>
        <PanelSection title="Block">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="bg-gray-200 p-4">
              <span className="block text-gray-700 text-center bg-gray-400 px-4 py-2">
                1
              </span>
              <span className="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2">
                2
              </span>
              <span className="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2">
                3
              </span>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Flow-Root">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="flow-root bg-gray-400">
              <div className="my-4 block text-gray-700 text-center bg-gray-500 px-4 py-2">
                1
              </div>
            </div>
            <div className="flow-root bg-gray-200">
              <div className="my-4 block text-gray-700 text-center bg-gray-400 px-4 py-2">
                2
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Inline Block">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="bg-gray-200">
              <div className="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                1
              </div>
              <div className="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                2
              </div>
              <div className="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                3
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Inline">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="bg-gray-200">
              <div className="inline text-gray-700 text-center bg-gray-400 px-4 py-2">
                1
              </div>
              <div className="inline text-gray-700 text-center bg-gray-400 px-4 py-2">
                2
              </div>
              <div className="inline text-gray-700 text-center bg-gray-400 px-4 py-2">
                3
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Flex">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="flex bg-gray-200">
              <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                1
              </div>
              <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                2
              </div>
              <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                3
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Inline Flex">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="inline-flex bg-gray-200">
              <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                1
              </div>
              <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                2
              </div>
              <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                3
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Grid">
          <div className="rounded-lg overflow-hidden border border-gray-400 bg-white p-8">
            <div className="grid gap-4 grid-cols-3">
              <div className="bg-gray-300 h-12"></div>
              <div className="bg-gray-500 h-12"></div>
              <div className="bg-gray-300 h-12"></div>
              <div className="bg-gray-500 h-12"></div>
              <div className="bg-gray-300 h-12"></div>
              <div className="bg-gray-500 h-12"></div>
              <div className="bg-gray-300 h-12"></div>
              <div className="bg-gray-500 h-12"></div>
              <div className="bg-gray-300 h-12"></div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Inline Grid">
          <div className="rounded-lg overflow-hidden border border-gray-400 bg-white p-8">
            <span className="inline-grid grid-cols-3 gap-x-4 p-2 bg-gray-200">
              <span className="px-4 py-2 text-center bg-gray-400">1</span>
              <span className="px-4 py-2 text-center bg-gray-400">1</span>
              <span className="px-4 py-2 text-center bg-gray-400">1</span>
            </span>
            <span className="inline-grid grid-cols-3 gap-x-4 p-2 bg-gray-200">
              <span className="px-4 py-2 text-center bg-gray-400">2</span>
              <span className="px-4 py-2 text-center bg-gray-400">2</span>
              <span className="px-4 py-2 text-center bg-gray-400">2</span>
            </span>
          </div>
        </PanelSection>
        <PanelSection title="Contents">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="flex bg-gray-200">
              <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                1
              </div>
              <div className="contents">
                <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                  2
                </div>
                <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                  3
                </div>
              </div>
              <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                4
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Table">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="table w-full">
              <div className="table-row-group">
                <div className="table-row">
                  <div className="table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm">
                    A cell with more content
                  </div>
                  <div className="table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm">
                    Cell 2
                  </div>
                  <div className="table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm">
                    Cell 3
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm">
                    Cell 4
                  </div>
                  <div className="table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm">
                    A cell with more content
                  </div>
                  <div className="table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm">
                    Cell 6
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PanelSection>
        <PanelSection title="Hidden">
          <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
            <div className="flex bg-gray-200">
              <div className="hidden text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                1
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                2
              </div>
              <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                3
              </div>
            </div>
          </div>
        </PanelSection>
      </div>
    </Layout>
  );
}
