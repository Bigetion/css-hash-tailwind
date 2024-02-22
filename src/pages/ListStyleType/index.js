import React from "react";

import PanelSection from "components/PanelSection";

export default function ListStyleType() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">List Style Type</h1>
      </div>
      <PanelSection title="Setting the list style type">
        <div className="flex flex-col gap-8">
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3">
              list-disc
            </span>
            <ul className="list-disc list-inside text-slate-900">
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>And I'd like to take a minute just sit right there</li>
              <li>
                I'll tell you how I became the prince of a town called Bel-Air{" "}
              </li>
            </ul>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3">
              list-decimal
            </span>
            <ul className="list-decimal list-inside text-slate-900">
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>And I'd like to take a minute just sit right there</li>
              <li>
                I'll tell you how I became the prince of a town called Bel-Air{" "}
              </li>
            </ul>
          </div>
          <div>
            <span className="font-medium text-sm text-slate-500 font-mono mb-3">
              list-none
            </span>
            <ul className="list-none list-inside text-slate-900">
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>And I'd like to take a minute just sit right there</li>
              <li>
                I'll tell you how I became the prince of a town called Bel-Air{" "}
              </li>
            </ul>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
