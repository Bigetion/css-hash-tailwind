import React from "react";
import { cssHash } from "css-hash";

import CenterContainer from "components/CenterContainer";

const spinnerClass = cssHash(
  (className) => `
    .${className} {
      border: 16px solid #f3f3f3;
      border-radius: 50%;
      border-top: 16px solid #3498db;
      width: 120px;
      height: 120px;
      -webkit-animation: ${className}-spin 1s linear infinite;
      animation: ${className}-spin 1s linear infinite;
    }
    @-webkit-keyframes ${className}-spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes ${className}-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
  `
);

export default function PageLoader() {
  return (
    <CenterContainer className="h-screen w-screen">
      <div>
        <div className={`${spinnerClass} text-center`}></div>
        <p className="text-xl text-center mt-2">Loading...</p>
      </div>
    </CenterContainer>
  );
}
