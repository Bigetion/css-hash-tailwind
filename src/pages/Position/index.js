import React from "react";

import PanelSection from "components/PanelSection";

export default function Position() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Position</h1>
      </div>
      <PanelSection title="Static">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="relative bg-gray-400 p-4">
            <div className="static h-32 bg-gray-600 p-4 text-gray-900">
              <p>Static parent</p>
              <div className="absolute bottom-0 left-0 bg-gray-800 p-4 text-gray-400">
                <p>Absolute child</p>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Relative">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="relative bg-gray-400 p-4">
            <div className="relative h-32 bg-gray-600 p-4 text-gray-900">
              <p>Relative parent</p>
              <div className="absolute bottom-0 left-0 bg-gray-800 p-4 text-gray-400">
                <p>Absolute child</p>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Absolute">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <p className="text-sm text-gray-600 mb-1">With static positioning</p>
          <div className="relative bg-gray-400 px-4 pt-2 pb-4 mb-6">
            <p className="mb-2 text-gray-700">Relative parent</p>
            <div className="static bg-gray-500 p-4 text-gray-700">
              <p className="mb-2">Static parent</p>
              <div className="static bottom-0 left-0 bg-gray-800 p-4 text-gray-400 inline-block">
                <p>Static child</p>
              </div>
              <div className="bg-gray-400 p-4 text-gray-700 inline-block">
                <p>Static sibling</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-1">
            With absolute positioning
          </p>
          <div className="relative bg-gray-400 px-4 pt-2 pb-4">
            <p className="mb-2 text-gray-700">Relative parent</p>
            <div className="static bg-gray-500 p-4 text-gray-700">
              <p className="mb-2">Static parent</p>
              <div className="absolute top-0 right-0 bg-gray-800 p-4 text-gray-400 inline-block">
                <p>Absolute child</p>
              </div>
              <div className="bg-gray-400 p-4  text-gray-700 inline-block">
                <p>Static sibling</p>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Fixed">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="rounded-b overflow-hidden max-w-md mx-auto mt-4 mb-4">
            <div className="rounded-t border border-gray-400 bg-gray-200 flex px-4 py-3">
              <div className="mr-6">
                <span className="inline-block rounded-full bg-gray-500 h-3 w-3 mr-1"></span>
                <span className="inline-block rounded-full bg-gray-500 h-3 w-3 mr-1"></span>
                <span className="inline-block rounded-full bg-gray-500 h-3 w-3"></span>
              </div>
              <div className="flex-1 bg-white border border-gray-400 rounded mr-4"></div>
            </div>
            <div className="relative bg-gray-400 h-64">
              <div className="absolute left-0 right-0 top-0 bg-gray-800 text-gray-400 z-10 px-4 py-3">
                Fixed child
                <div className="absolute top-0 bottom-0 right-0 px-4 py-3 bg-gray-500 text-gray-800">
                  Absolute child
                </div>
              </div>
              <div className="absolute inset-0 overflow-auto pt-16 px-4 pb-4">
                <p className="mb-4">Scroll me!</p>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                  nulla. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Curabitur sodales
                  ligula in libero.
                </p>
                <p className="mb-4">
                  Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque
                  nibh. Aenean quam. In scelerisque sem at dolor. Maecenas
                  mattis. Sed convallis tristique sem. Proin ut ligula vel nunc
                  egestas porttitor. Morbi lectus risus, iaculis vel, suscipit
                  quis, luctus non, massa. Fusce ac turpis quis ligula lacinia
                  aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
                  tincidunt sed, euismod in, nibh. Quisque volutpat condimentum
                  velit. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.
                </p>
                <p className="mb-4">
                  Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor
                  neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla
                  facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a
                  tellus consequat imperdiet. Vestibulum sapien. Proin quam.
                  Etiam ultrices. Suspendisse in justo eu magna luctus suscipit.
                  Sed lectus. Integer euismod lacus luctus magna.
                </p>
                <p className="mb-4">
                  Quisque cursus, metus vitae pharetra auctor, sem massa mattis
                  sem, at interdum magna augue eget diam. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed
                  non quam. In vel mi sit amet augue congue elementum. Morbi in
                  ipsum sit amet pede facilisis laoreet. Donec lacus nunc,
                  viverra nec, blandit vel, egestas et, augue. Vestibulum
                  tincidunt malesuada tellus. Ut ultrices ultrices enim.
                  Curabitur sit amet mauris. Morbi in dui quis est pulvinar
                  ullamcorper. Nulla facilisi.
                </p>
                <p className="mb-4">
                  Integer lacinia sollicitudin massa. Cras metus. Sed aliquet
                  risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis,
                  venenatis tristique, dignissim in, ultrices sit amet, augue.
                  Proin sodales libero eget ante. Nulla quam. Aenean laoreet.
                  Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies
                  eu, pede. Ut orci risus, accumsan porttitor, cursus quis,
                  aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at
                  pede suscipit sodales. Aenean lectus elit, fermentum non,
                  convallis id, sagittis at, neque.
                </p>
                <p className="mb-4">
                  Nullam mauris orci, aliquet et, iaculis et, viverra vitae,
                  ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas
                  aliquet mollis lectus. Vivamus consectetuer risus et tortor.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa.
                </p>
                <p className="mb-4">
                  Vestibulum lacinia arcu eget nulla. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Curabitur sodales ligula in libero. Sed dignissim
                  lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean
                  quam. In scelerisque sem at dolor. Maecenas mattis. Sed
                  convallis tristique sem. Proin ut ligula vel nunc egestas
                  porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
                  luctus non, massa. Fusce ac turpis quis ligula lacinia
                  aliquet.
                </p>
                <p>
                  Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt
                  sed, euismod in, nibh. Quisque volutpat condimentum velit.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia,
                  urna non tincidunt mattis, tortor neque adipiscing diam, a
                  cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla.
                  Suspendisse potenti. Nunc feugiat mi a tellus consequat
                  imperdiet. Vestibulum sapien. Proin quam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Sticky">
        <div className="rounded-lg overflow-hidden border border-gray-400 p-4">
          <div className="h-64 overflow-auto">
            <div>
              <div className="sticky top-0 bg-gray-400 px-2 py-1 font-bold text-gray-700">
                Sticky Heading 1
              </div>
              <p className="py-4">
                Quisque cursus, metus vitae pharetra auctor, sem massa mattis
                sem, at interdum magna augue eget diam. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed
                non quam. In vel mi sit amet augue congue elementum. Morbi in
                ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra
                nec, blandit vel, egestas et, augue. Vestibulum tincidunt
                malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet
                mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla
                facilisi.
              </p>
            </div>
            <div>
              <div className="sticky top-0 bg-gray-400 px-2 py-1 font-bold text-gray-700">
                Sticky Heading 2
              </div>
              <p className="py-4">
                Integer lacinia sollicitudin massa. Cras metus. Sed aliquet
                risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis,
                venenatis tristique, dignissim in, ultrices sit amet, augue.
                Proin sodales libero eget ante. Nulla quam. Aenean laoreet.
                Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu,
                pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet
                eget, justo. Sed pretium blandit orci. Ut eu diam at pede
                suscipit sodales. Aenean lectus elit, fermentum non, convallis
                id, sagittis at, neque.
              </p>
            </div>
            <div>
              <div className="sticky top-0 bg-gray-400 px-2 py-1 font-bold text-gray-700">
                Sticky Heading 3
              </div>
              <p className="py-4">
                Nullam mauris orci, aliquet et, iaculis et, viverra vitae,
                ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas
                aliquet mollis lectus. Vivamus consectetuer risus et tortor.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa.
              </p>
            </div>
            <div>
              <div className="sticky top-0 bg-gray-400 px-2 py-1 font-bold text-gray-700">
                Sticky Heading 4
              </div>
              <p className="py-4">
                Quisque cursus, metus vitae pharetra auctor, sem massa mattis
                sem, at interdum magna augue eget diam. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed
                non quam. In vel mi sit amet augue congue elementum. Morbi in
                ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra
                nec, blandit vel, egestas et, augue. Vestibulum tincidunt
                malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet
                mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla
                facilisi.
              </p>
            </div>
            <div>
              <div className="sticky top-0 bg-gray-400 px-2 py-1 font-bold text-gray-700">
                Sticky Heading 5
              </div>
              <p className="py-4">
                Integer lacinia sollicitudin massa. Cras metus. Sed aliquet
                risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis,
                venenatis tristique, dignissim in, ultrices sit amet, augue.
                Proin sodales libero eget ante. Nulla quam. Aenean laoreet.
                Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu,
                pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet
                eget, justo. Sed pretium blandit orci. Ut eu diam at pede
                suscipit sodales. Aenean lectus elit, fermentum non, convallis
                id, sagittis at, neque.
              </p>
            </div>
            <div>
              <div className="sticky top-0 bg-gray-400 px-2 py-1 font-bold text-gray-700">
                Sticky Heading 6
              </div>
              <p className="py-4">
                Nullam mauris orci, aliquet et, iaculis et, viverra vitae,
                ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas
                aliquet mollis lectus. Vivamus consectetuer risus et tortor.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa.
              </p>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
