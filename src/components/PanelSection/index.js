import React from "react";

export default function PanelSection({ title, children }) {
  return (
    <div className="mt-4">
      <h1 className="text-xl text-gray-700 mb-2">{title}</h1>
      <div className="rounded-lg overflow-hidden bg-slate-50">{children}</div>
    </div>
  );
}
