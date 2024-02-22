import React from "react";

import stripes from "utils/stripes";

import PanelSection from "components/PanelSection";

export default function Height() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Height</h1>
      </div>
      <PanelSection title="Fixed Height">
        <div className="flex justify-center items-end space-x-4 font-mono font-bold text-xs text-center text-white">
          <div className="w-8 bg-blue-500 rounded-lg shadow-lg h-96 relative">
            <div className="absolute w-8 bottom-6">
              <div className="-rotate-90">h-96</div>
            </div>
          </div>
          <div className="w-8 bg-blue-500 rounded-lg shadow-lg h-80 relative">
            <div className="absolute w-8 bottom-6">
              <div className="-rotate-90">h-80</div>
            </div>
          </div>
          <div className="w-8 bg-blue-500 rounded-lg shadow-lg h-64 relative">
            <div className="absolute w-8 bottom-6">
              <div className="-rotate-90">h-64</div>
            </div>
          </div>
          <div className="w-8 bg-blue-500 rounded-lg shadow-lg h-48 relative">
            <div className="absolute w-8 bottom-6">
              <div className="-rotate-90">h-48</div>
            </div>
          </div>
          <div className="w-8 bg-blue-500 rounded-lg shadow-lg h-40 relative">
            <div className="absolute w-8 bottom-6">
              <div className="-rotate-90">h-40</div>
            </div>
          </div>
          <div className="w-8 bg-blue-500 rounded-lg shadow-lg h-32 relative">
            <div className="absolute w-8 bottom-6">
              <div className="-rotate-90">h-32</div>
            </div>
          </div>
          <div className="w-8 bg-blue-500 rounded-lg shadow-lg h-24 relative">
            <div className="absolute w-8 bottom-6">
              <div className="-rotate-90">h-24</div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Dynamic viewport height">
        <div className="relative grid justify-items-center">
          <div
            className={`${stripes.pink} relative rounded-lg border overscroll-none border-slate-300 text-center text-xs overflow-y-scroll`}
            style={{ width: 300, height: 491, scrollbarWidth: "none" }}
          >
            <div
              className="absolute w-full overflow-hidden snap-start"
              style={{ height: 491, transform: "none" }}
            >
              <div
                className=" w-full grid items-center justify-start gap-4 rounded-t-lg border-b border-slate-300 bg-slate-100 px-3"
                style={{
                  gridTemplateColumns: "auto 1fr auto",
                  height: 48,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <div className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-1  text-slate-600">
                  tailwindcss.com
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
              <div
                className="w-full p-2 h-full pointer-events-none "
                style={{ maxHeight: 441 }}
              >
                <div
                  className="bg-pink-500 border border-pink-400 text-slate-50 font-mono font-bold py-4 w-full h-full gap-5 rounded-md grid items-center content-center self-center justify-items-center  overflow-hidden"
                  style={{ gridTemplateRows: "1fr auto 1fr" }}
                >
                  <div
                    className="grid h-full justify-items-center"
                    style={{ gridTemplateRows: "1px 1fr" }}
                  >
                    <div className="bg-white bg-opacity-60 w-4 h-full" />
                    <div className="bg-white bg-opacity-40 w-px h-full" />
                  </div>
                  <p>h-dvh</p>
                  <div
                    className="grid h-full justify-items-center"
                    style={{ gridTemplateRows: "1fr 1px" }}
                  >
                    <div className="bg-white bg-opacity-40 w-px h-full" />
                    <div className="bg-white bg-opacity-60 w-4 h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Large viewport height">
        <div className="relative grid justify-items-center">
          <div
            className={`${stripes.indigo} relative rounded-lg border overscroll-none border-slate-300 text-center text-xs overflow-y-scroll`}
            style={{ width: 300, height: 491, scrollbarWidth: "none" }}
          >
            <div
              className="absolute w-full overflow-hidden snap-start"
              style={{ height: 491, transform: "none" }}
            >
              <div
                className=" w-full grid items-center justify-start gap-4 rounded-t-lg border-b border-slate-300 bg-slate-100 px-3"
                style={{
                  gridTemplateColumns: "auto 1fr auto",
                  height: 48,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <div className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-slate-600">
                  tailwindcss.com
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
              <div
                className="w-full p-2 h-full pointer-events-none"
                style={{ maxHeight: 491 }}
              >
                <div
                  className="bg-indigo-500 border border-indigo-400 text-slate-50 font-mono font-bold py-4 w-full h-full gap-5 rounded-md grid items-center content-center self-center justify-items-center  overflow-hidden"
                  style={{ gridTemplateRows: "1fr auto 1fr" }}
                >
                  <div
                    className="grid h-full justify-items-center"
                    style={{ gridTemplateRows: "1px 1fr" }}
                  >
                    <div className="bg-white bg-opacity-60 w-4 h-full" />
                    <div className="bg-white bg-opacity-40 w-px h-full" />
                  </div>
                  <p>h-lvh</p>
                  <div
                    className="grid h-full justify-items-center"
                    style={{ gridTemplateRows: "1fr 1px" }}
                  >
                    <div className="bg-white bg-opacity-40 w-px h-full" />
                    <div className="bg-white bg-opacity-60 w-4 h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-indigo-500 border border-indigo-400 opacity-20 rounded-b-md absolute left-0 right-0 mx-auto"
            style={{ width: 288, bottom: "-48px", height: 48 }}
          />
        </div>
      </PanelSection>
      <PanelSection title="Small viewport height">
        <div className="relative grid justify-items-center">
          <div
            className={`${stripes.purple} relative rounded-lg border overscroll-none border-slate-300 text-center text-xs overflow-y-scroll no-scrollbar`}
            style={{ width: 300, height: 491, scrollbarWidth: "none" }}
          >
            <div
              className="absolute w-full overflow-hidden snap-start"
              style={{ height: 491, transform: "none" }}
            >
              <div
                className=" w-full grid items-center justify-start gap-4 rounded-t-lg border-b border-slate-300 bg-slate-100 px-3"
                style={{
                  gridTemplateColumns: "auto 1fr auto",
                  height: 48,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <div className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-1  text-slate-600">
                  tailwindcss.com
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
              <div
                className="w-full p-2 h-full pointer-events-none "
                style={{ maxHeight: 441 }}
              >
                <div
                  className="bg-pink-500 border border-pink-400 text-slate-50 font-mono font-bold py-4 w-full h-full gap-5 rounded-md grid items-center content-center self-center justify-items-center  overflow-hidden"
                  style={{ gridTemplateRows: "1fr auto 1fr" }}
                >
                  <div
                    className="grid h-full justify-items-center"
                    style={{ gridTemplateRows: "1px 1fr" }}
                  >
                    <div className="bg-white bg-opacity-60 w-4 h-full" />
                    <div className="bg-white bg-opacity-40 w-px h-full" />
                  </div>
                  <p>h-svh</p>
                  <div
                    className="grid h-full justify-items-center"
                    style={{ gridTemplateRows: "1fr 1px" }}
                  >
                    <div className="bg-white bg-opacity-40 w-px h-full" />
                    <div className="bg-white bg-opacity-60 w-4 h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
