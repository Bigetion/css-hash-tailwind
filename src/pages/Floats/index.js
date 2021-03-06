import React from "react";

import PanelSection from "components/PanelSection";

export default function Floats() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Floats</h1>
      </div>
      <PanelSection title="FLoat right">
        <div className="rounded overflow-hidden border border-gray-400 p-4">
          <div className="bg-gray-200 p-4">
            <img
              alt=""
              className="float-right ml-4 my-2 h-32"
              src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi
              euismod mollis ultrices condimentum velit. Proin velit libero,
              interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac
              luctus turpis, vel efficitur ante. Cras convallis risus vel
              vehicula dapibus. Donec eget neque fringilla, faucibus mi quis,
              porttitor magna. Cras pellentesque leo est, et luctus neque rutrum
              eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi
              consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec
              varius vehicula magna sit amet auctor. Ut congue vehicula lectus
              in blandit. Vivamus suscipit eleifend turpis, nec sodales sem
              vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu,
              finibus justo. Etiam eu vehicula felis.
            </p>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Float left">
        <div className="rounded overflow-hidden border border-gray-400 p-4">
          <div className="bg-gray-200 p-4">
            <img
              alt=""
              className="float-left mr-4 my-2 h-32"
              src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi
              euismod mollis ultrices condimentum velit. Proin velit libero,
              interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac
              luctus turpis, vel efficitur ante. Cras convallis risus vel
              vehicula dapibus. Donec eget neque fringilla, faucibus mi quis,
              porttitor magna. Cras pellentesque leo est, et luctus neque rutrum
              eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi
              consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec
              varius vehicula magna sit amet auctor. Ut congue vehicula lectus
              in blandit. Vivamus suscipit eleifend turpis, nec sodales sem
              vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu,
              finibus justo. Etiam eu vehicula felis.
            </p>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Don't float">
        <div className="rounded overflow-hidden border border-gray-400 p-4">
          <div className="bg-gray-200 p-4">
            <img
              alt=""
              className="float-none mb-4 h-32"
              src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi
              euismod mollis ultrices condimentum velit. Proin velit libero,
              interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac
              luctus turpis, vel efficitur ante. Cras convallis risus vel
              vehicula dapibus. Donec eget neque fringilla, faucibus mi quis,
              porttitor magna. Cras pellentesque leo est, et luctus neque rutrum
              eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi
              consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec
              varius vehicula magna sit amet auctor. Ut congue vehicula lectus
              in blandit. Vivamus suscipit eleifend turpis, nec sodales sem
              vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu,
              finibus justo. Etiam eu vehicula felis.
            </p>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
