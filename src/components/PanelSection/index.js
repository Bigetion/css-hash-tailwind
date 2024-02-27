import React from "react";
import { classNames } from "css_hash";

export default function PanelSection({ title, children, paddingless }) {
  return (
    <div className="mt-4">
      <h1 className="text-xl text-gray-700 mb-2 font-medium">{title}</h1>
      <div
        className={classNames(
          "rounded-lg overflow-hidden bg-slate-50 border bg-square relative",
          paddingless ? "" : "p-8"
        )}
      >
        {children}
      </div>
    </div>
  );
}
