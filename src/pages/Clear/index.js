import React from "react";

import PanelSection from "components/PanelSection";

export default function Clear() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl">Clear</h1>
      </div>
      <PanelSection title="Clearing left-floated elements" paddingless>
        <div className="mx-4 bg-white shadow-xl p-8 text-slate-700 text-sm sm:text-base leading-6 sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
          <div className="float-left mb-4 rounded-xl overflow-hidden">
            <div className="relative aspect aspect-w-1 aspect-h-1 sm:aspect-w-16 sm:aspect-h-9 w-24 sm:w-44">
              <img
                alt=""
                className="object-cover"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
              />
              <div className="absolute inset-0 ring-1 ring-inset rounded-xl" />
            </div>
          </div>
          <div className="float-right ml-6 mb-4 rounded-xl overflow-hidden ">
            <div className="relative aspect aspect-w-1 aspect-h-1 sm:aspect-w-16 sm:aspect-h-9 w-40 sm:w-64">
              <img
                alt=""
                className="object-cover"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
              />
              <div className="absolute inset-0 ring-1 ring-inset rounded-xl" />
            </div>
          </div>
          <p className="clear-left text-justify">
            Maybe we can live without libraries, people like you and me. Maybe.
            Sure, we're too old to change the world, but what about that kid,
            sitting down, opening a book, right now, in a branch at the local
            library and finding drawings of pee-pees and wee-wees on the Cat in
            the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
            Look. If you think this is about overdue fines and missing books,
            you'd better think again. This is about that kid's right to read a
            book without getting his mind warped! Or: maybe that turns you on,
            Seinfeld; maybe that's how y'get your kicks. You and your good-time
            buddies.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Clearing right-floated elements" paddingless>
        <div className="mx-4 bg-white shadow-xl p-8 text-slate-700 text-sm sm:text-base leading-6 sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
          <div className="float-left mr-6 mb-4 rounded-xl overflow-hidden">
            <div className="relative aspect aspect-w-4 aspect-h-5 sm:aspect-w-16 sm:aspect-h-9 w-28 sm:w-64">
              <img
                alt=""
                className="object-cover"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
              />
              <div className="absolute inset-0 ring-1 ring-inset rounded-xl" />
            </div>
          </div>
          <div className="float-right mb-4 rounded-xl overflow-hidden ">
            <div className="relative aspect aspect-w-4 aspect-h-5 sm:aspect-w-16 sm:aspect-h-9 w-20 sm:w-44">
              <img
                alt=""
                className="object-cover"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
              />
              <div className="absolute inset-0 ring-1 ring-inset rounded-xl" />
            </div>
          </div>
          <p className="clear-right text-justify">
            Maybe we can live without libraries, people like you and me. Maybe.
            Sure, we're too old to change the world, but what about that kid,
            sitting down, opening a book, right now, in a branch at the local
            library and finding drawings of pee-pees and wee-wees on the Cat in
            the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
            Look. If you think this is about overdue fines and missing books,
            you'd better think again. This is about that kid's right to read a
            book without getting his mind warped! Or: maybe that turns you on,
            Seinfeld; maybe that's how y'get your kicks. You and your good-time
            buddies.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Clearing all floated elements" paddingless>
        <div className="mx-4 bg-white shadow-xl p-8 text-slate-700 text-sm sm:text-base leading-6 sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
          <div className="float-left mb-4 rounded-xl overflow-hidden">
            <div className="relative aspect aspect-w-16 aspect-h-9 w-44">
              <img
                alt=""
                className="object-cover"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
              />
              <div className="absolute inset-0 ring-1 ring-inset rounded-xl" />
            </div>
          </div>
          <div className="float-right ml-6 mb-4 rounded-xl overflow-hidden ">
            <div className="relative aspect aspect-w-16 aspect-h-9 w-64">
              <img
                alt=""
                className="object-cover"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
              />
              <div className="absolute inset-0 ring-1 ring-inset rounded-xl" />
            </div>
          </div>
          <p className="clear-both text-justify">
            Maybe we can live without libraries, people like you and me. Maybe.
            Sure, we're too old to change the world, but what about that kid,
            sitting down, opening a book, right now, in a branch at the local
            library and finding drawings of pee-pees and wee-wees on the Cat in
            the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
            Look. If you think this is about overdue fines and missing books,
            you'd better think again. This is about that kid's right to read a
            book without getting his mind warped! Or: maybe that turns you on,
            Seinfeld; maybe that's how y'get your kicks. You and your good-time
            buddies.
          </p>
        </div>
      </PanelSection>
      <PanelSection title="Disabling applied clears" paddingless>
        <div className="mx-4 bg-white shadow-xl p-8 text-slate-700 dark:bg-slate-800 dark:text-slate-400">
          <div className="relative float-left mr-6 mb-4 rounded-xl overflow-hidden">
            <div className="relative aspect aspect-w-16 aspect-h-9 w-44">
              <img
                alt=""
                className="h-24 object-cover"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
              />
              <div className="absolute inset-0 ring-1 ring-inset rounded-xl" />
            </div>
          </div>
          <div className="relative float-right ml-6 mb-4 rounded-xl overflow-hidden">
            <div className="relative aspect aspect-w-16 aspect-h-9 w-64">
              <img
                alt=""
                className="h-36 object-cover"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
              />
              <div className="absolute inset-0 ring-1 ring-inset rounded-xl" />
            </div>
          </div>
          <p className="clear-none text-justify">
            Maybe we can live without libraries, people like you and me. Maybe.
            Sure, we're too old to change the world, but what about that kid,
            sitting down, opening a book, right now, in a branch at the local
            library and finding drawings of pee-pees and wee-wees on the Cat in
            the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
            Look. If you think this is about overdue fines and missing books,
            you'd better think again. This is about that kid's right to read a
            book without getting his mind warped! Or: maybe that turns you on,
            Seinfeld; maybe that's how y'get your kicks. You and your good-time
            buddies.
          </p>
        </div>
      </PanelSection>
    </div>
  );
}
