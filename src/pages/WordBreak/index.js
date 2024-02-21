import React from "react";

import PanelSection from "components/PanelSection";

export default function WordBreak() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Word Break</h1>
      </div>
      <PanelSection title="Normal">
        <div className="">
          <p className="break-normal max-w-xs p-2 bg-gray-200 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam
            at sed dolorum ratione dolorem nisi velit cum.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Break Words">
        <div className="">
          <p className="break-words max-w-xs p-2 bg-gray-200 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam
            at sed dolorum ratione dolorem nisi velit cum.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Break All">
        <div className="">
          <p className="break-all max-w-xs p-2 bg-gray-200 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam
            at sed dolorum ratione dolorem nisi velit cum.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Truncate">
        <div className="">
          <p className="truncate max-w-xs p-2 bg-gray-200 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam
            at sed dolorum ratione dolorem nisi velit cum.
          </p>
        </div>
      </PanelSection>
    </div>
  );
}
