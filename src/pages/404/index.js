import React from "react";

import Layout from "layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
        <div className="flex items-center">
          <h1 className="text-3xl">404</h1>
        </div>
        <p className="mt-0 mb-4 text-gray-600">
          The page you requested was not found
        </p>
      </div>
    </Layout>
  );
}
