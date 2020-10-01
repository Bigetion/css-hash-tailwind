import React from "react";

import PanelSection from "components/PanelSection";

export default function LineHeight() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Line Height</h1>
      </div>
      <PanelSection title="Relative line-heights">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="mb-6">
            <p className="text-sm text-gray-600">.leading-none</p>
            <p className="leading-none text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
              laborum, rerum accusantium modi quidem, ipsam illum quis sed
              voluptatum quae eum fugit earum.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.leading-tight</p>
            <p className="leading-tight text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
              laborum, rerum accusantium modi quidem, ipsam illum quis sed
              voluptatum quae eum fugit earum.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.leading-snug</p>
            <p className="leading-snug text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
              laborum, rerum accusantium modi quidem, ipsam illum quis sed
              voluptatum quae eum fugit earum.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.leading-normal</p>
            <p className="leading-normal text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
              laborum, rerum accusantium modi quidem, ipsam illum quis sed
              voluptatum quae eum fugit earum.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.leading-relaxed</p>
            <p className="leading-relaxed text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
              laborum, rerum accusantium modi quidem, ipsam illum quis sed
              voluptatum quae eum fugit earum.
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">.leading-loose</p>
            <p className="leading-loose text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
              laborum, rerum accusantium modi quidem, ipsam illum quis sed
              voluptatum quae eum fugit earum.
            </p>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Fixed line-heights">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="mb-6">
            <p className="text-sm text-gray-600">.leading-3</p>
            <p className="leading-3 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
              laborum, rerum accusantium modi quidem, ipsam illum quis sed
              voluptatum quae eum fugit earum.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.leading-4</p>
            <p className="leading-4 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
              laborum, rerum accusantium modi quidem, ipsam illum quis sed
              voluptatum quae eum fugit earum.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.leading-5</p>
            <p className="leading-5 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
              laborum, rerum accusantium modi quidem, ipsam illum quis sed
              voluptatum quae eum fugit earum.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.leading-6</p>
            <p className="leading-6 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
              laborum, rerum accusantium modi quidem, ipsam illum quis sed
              voluptatum quae eum fugit earum.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.leading-7</p>
            <p className="leading-7 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
              laborum, rerum accusantium modi quidem, ipsam illum quis sed
              voluptatum quae eum fugit earum.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.leading-8</p>
            <p className="leading-8 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
              laborum, rerum accusantium modi quidem, ipsam illum quis sed
              voluptatum quae eum fugit earum.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-600">.leading-9</p>
            <p className="leading-9 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
              laborum, rerum accusantium modi quidem, ipsam illum quis sed
              voluptatum quae eum fugit earum.
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">.leading-10</p>
            <p className="leading-10 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
              laborum, rerum accusantium modi quidem, ipsam illum quis sed
              voluptatum quae eum fugit earum.
            </p>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
