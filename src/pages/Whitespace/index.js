import React from "react";

import PanelSection from "components/PanelSection";

export default function Whitespace() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Whitespace</h1>
      </div>
      <PanelSection title="Normal">
        <div className="">
          <div className="whitespace-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            quidem itaque beatae, rem tenetur quia iure, eum natus enim maxime
            laudantium quibusdam illo nihil, reprehenderit saepe quam aliquid
            odio accusamus.
          </div>
        </div>
      </PanelSection>
      <PanelSection title="No Wrap">
        <div className="">
          <div className="whitespace-no-wrap overflow-x-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            quidem itaque beatae, rem tenetur quia iure, eum natus enim maxime
            laudantium quibusdam illo nihil, reprehenderit saepe quam aliquid
            odio accusamus.
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Pre">
        <div className="">
          <div className="whitespace-pre overflow-x-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            quidem itaque beatae, rem tenetur quia iure, eum natus enim maxime
            laudantium quibusdam illo nihil, reprehenderit saepe quam aliquid
            odio accusamus.
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Pre Line">
        <div className="">
          <div className="whitespace-pre-line">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            quidem itaque beatae, rem tenetur quia iure, eum natus enim maxime
            laudantium quibusdam illo nihil, reprehenderit saepe quam aliquid
            odio accusamus.
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Pre Wrap">
        <div className="">
          <div className="whitespace-pre-wrap">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            quidem itaque beatae, rem tenetur quia iure, eum natus enim maxime
            laudantium quibusdam illo nihil, reprehenderit saepe quam aliquid
            odio accusamus.
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
