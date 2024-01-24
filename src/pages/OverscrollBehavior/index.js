import React from "react";

import PanelSection from "components/PanelSection";

export default function OverscrollBehavior() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Overscroll Behavior</h1>
      </div>
      <PanelSection title="Auto">
        <div className="">
          <div className="overscroll-auto overflow-auto h-32 bg-gray-300 text-gray-700 p-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eleifend rutrum auctor. Phasellus convallis sagittis augue ut
              ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam
              aliquet elit dui, vitae hendrerit lectus volutpat eget. In
              porttitor tincidunt egestas. Pellentesque laoreet ligula at est
              vulputate facilisis. Etiam tristique justo ut odio placerat
              ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc
              gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum
              nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean
              mattis elit mi, sed ultricies augue consectetur id. Sed id magna
              malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex.
              Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu
              diam convallis mollis a sed leo. Proin congue augue turpis, eget
              rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed
              tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex
              lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu
              turpis. In id felis vulputate, tempor massa eget, malesuada
              mauris. Quisque fringilla consequat metus, luctus scelerisque leo
              fringilla vel.
            </p>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Contain">
        <div className="">
          <div className="overscroll-contain overflow-auto h-32 bg-gray-300 text-gray-700 p-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eleifend rutrum auctor. Phasellus convallis sagittis augue ut
              ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam
              aliquet elit dui, vitae hendrerit lectus volutpat eget. In
              porttitor tincidunt egestas. Pellentesque laoreet ligula at est
              vulputate facilisis. Etiam tristique justo ut odio placerat
              ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc
              gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum
              nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean
              mattis elit mi, sed ultricies augue consectetur id. Sed id magna
              malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex.
              Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu
              diam convallis mollis a sed leo. Proin congue augue turpis, eget
              rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed
              tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex
              lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu
              turpis. In id felis vulputate, tempor massa eget, malesuada
              mauris. Quisque fringilla consequat metus, luctus scelerisque leo
              fringilla vel.
            </p>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="None">
        <div className="">
          <div className="overscroll-none overflow-auto h-32 bg-gray-300 text-gray-700 p-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eleifend rutrum auctor. Phasellus convallis sagittis augue ut
              ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam
              aliquet elit dui, vitae hendrerit lectus volutpat eget. In
              porttitor tincidunt egestas. Pellentesque laoreet ligula at est
              vulputate facilisis. Etiam tristique justo ut odio placerat
              ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc
              gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum
              nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean
              mattis elit mi, sed ultricies augue consectetur id. Sed id magna
              malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex.
              Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu
              diam convallis mollis a sed leo. Proin congue augue turpis, eget
              rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed
              tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex
              lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu
              turpis. In id felis vulputate, tempor massa eget, malesuada
              mauris. Quisque fringilla consequat metus, luctus scelerisque leo
              fringilla vel.
            </p>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
