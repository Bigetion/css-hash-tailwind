import React from "react";

import PanelSection from "components/PanelSection";

export default function BackgroundAttachment() {
  return (
    <div className="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Background Attachment</h1>
      </div>
      <PanelSection title="Fixed" paddingless>
        <div
          className="max-w-lg mx-auto h-80 overflow-y-scroll bg-cover shadow-lg"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80)",
            backgroundPosition: "center -80px",
          }}
        >
          <div className="mt-40">
            <div className="bg-white p-4 sm:p-8">
              <div className="font-extrabold text-2xl text-black tracking-tight">
                My trip to the summit
              </div>
              <div className="mt-1 font-medium text-sm text-slate-500">
                November 16, 2021 · 4 min read
              </div>
              <p className="mt-4 leading-7 text-slate-500">
                Maybe we can live without libraries, people like you and me.
                Maybe. Sure, we're too old to change the world, but what about
                that kid, sitting down, opening a book, right now, in a branch
                at the local library and finding drawings of pee-pees and
                wee-wees on the Cat in the Hat and the Five Chinese Brothers?
                Doesn't HE deserve better?
              </p>
              <p className="mt-4 leading-7 text-slate-500">
                Look. If you think this is about overdue fines and missing
                books, you'd better think again. This is about that kid's right
                to read a book without getting his mind warped! Or: maybe that
                turns you on, Seinfeld; maybe that's how y'get your kicks. You
                and your good-time buddies.
              </p>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Local" paddingless>
        <div className="max-w-lg mx-auto bg-white shadow-lg">
          <div className="py-8 sm:py-12">
            <div
              className="h-64 overflow-y-scroll scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 bg-cover bg-local"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80)",
              }}
            >
              <div className="p-6 sm:px-16 sm:py-12 bg-black/40">
                <p className="font-serif italic text-base sm:text-2xl text-white text-center leading-6 sm:leading-8">
                  "Because the mail never stops. It just keeps coming and coming
                  and coming, there's never a let-up. It's relentless. Every day
                  it piles up more and more and more. And you gotta get it out
                  but the more you get it out the more it keeps coming in. And
                  then the barcode reader breaks and it's Publisher's Clearing
                  House day."
                </p>
                <div className="mt-6 font-inter font-bold text-sm sm:text-base text-white text-center">
                  — Newman
                </div>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
      <PanelSection title="Scroll" paddingless>
        <div className="max-w-lg mx-auto bg-white shadow-lg">
          <div className="py-8 sm:py-12">
            <div
              className="h-64 overflow-y-scroll scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 bg-cover bg-scroll"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80)",
              }}
            >
              <div className="p-6 sm:px-16 sm:py-12 bg-black bg-opacity-40">
                <p className="font-serif italic text-base sm:text-2xl text-white text-center leading-6 sm:leading-8">
                  "Because the mail never stops. It just keeps coming and coming
                  and coming, there's never a let-up. It's relentless. Every day
                  it piles up more and more and more. And you gotta get it out
                  but the more you get it out the more it keeps coming in. And
                  then the barcode reader breaks and it's Publisher's Clearing
                  House day."
                </p>
                <div className="mt-6 font-inter font-bold text-sm sm:text-base text-white text-center">
                  — Newman
                </div>
              </div>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
}
