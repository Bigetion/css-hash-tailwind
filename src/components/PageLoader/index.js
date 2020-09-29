import React from "react";
import { BulletList } from "react-content-loader";

export default function PageLoader() {
  return (
    <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
      <BulletList
        backgroundColor="#CBD5E0"
        foregroundColor="#EDF2F7"
        style={{ width: "100%" }}
      />
    </div>
  );
}
