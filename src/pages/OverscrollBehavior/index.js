import React from "react";

import PanelSection from "components/PanelSection";

export default function OverscrollBehavior() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Overscroll Behavior</h1>
      </div>
      <PanelSection title="Preventing parent overscrolling" paddingless>
        <div className="mx-4 overscroll-contain overflow-auto h-48 bg-white dark:bg-slate-800 shadow-xl p-8 space-y-4 text-slate-700 dark:text-slate-400 text-sm sm:text-base leading-6 sm:leading-7">
          <p>
            Well, let me tell you something, funny boy. Y'know that little
            stamp, the one that says "New York Public Library"? Well that may
            not mean anything to you, but that means a lot to me. One whole hell
            of a lot.
          </p>
          <p>
            Sure, go ahead, laugh if you want to. I've seen your type before:
            Flashy, making the scene, flaunting convention. Yeah, I know what
            you're thinking. What's this guy making such a big stink about old
            library books? Well, let me give you a hint, junior.
          </p>
          <p>
            Maybe we can live without libraries, people like you and me. Maybe.
            Sure, we're too old to change the world, but what about that kid,
            sitting down, opening a book, right now, in a branch at the local
            library and finding drawings of pee-pees and wee-wees on the Cat in
            the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Preventing overscroll bouncing" paddingless>
        <div className="mx-4 overscroll-none overflow-auto h-48 bg-white dark:bg-slate-800 shadow-xl p-8 space-y-4 text-slate-700 dark:text-slate-400 text-sm sm:text-base leading-6 sm:leading-7">
          <p>
            Well, let me tell you something, funny boy. Y'know that little
            stamp, the one that says "New York Public Library"? Well that may
            not mean anything to you, but that means a lot to me. One whole hell
            of a lot.
          </p>
          <p>
            Sure, go ahead, laugh if you want to. I've seen your type before:
            Flashy, making the scene, flaunting convention. Yeah, I know what
            you're thinking. What's this guy making such a big stink about old
            library books? Well, let me give you a hint, junior.
          </p>
          <p>
            Maybe we can live without libraries, people like you and me. Maybe.
            Sure, we're too old to change the world, but what about that kid,
            sitting down, opening a book, right now, in a branch at the local
            library and finding drawings of pee-pees and wee-wees on the Cat in
            the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Using the default overscroll behavior" paddingless>
        <div className="mx-4 overscroll-auto overflow-auto h-48 bg-white dark:bg-slate-800 shadow-xl p-8 space-y-4 text-slate-700 dark:text-slate-400 text-sm sm:text-base leading-6 sm:leading-7">
          <p>
            Well, let me tell you something, funny boy. Y'know that little
            stamp, the one that says "New York Public Library"? Well that may
            not mean anything to you, but that means a lot to me. One whole hell
            of a lot.
          </p>
          <p>
            Sure, go ahead, laugh if you want to. I've seen your type before:
            Flashy, making the scene, flaunting convention. Yeah, I know what
            you're thinking. What's this guy making such a big stink about old
            library books? Well, let me give you a hint, junior.
          </p>
          <p>
            Maybe we can live without libraries, people like you and me. Maybe.
            Sure, we're too old to change the world, but what about that kid,
            sitting down, opening a book, right now, in a branch at the local
            library and finding drawings of pee-pees and wee-wees on the Cat in
            the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          </p>
        </div>
      </PanelSection>
    </div>
  );
}
