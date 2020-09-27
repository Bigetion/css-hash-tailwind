import React from "react";
import { cssHash, classNames } from "css-hash";

const centerContainerClass = cssHash(
  (className) => `
    .${className} {
      position: relative;
    }
    .${className} > :first-child {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `
);

function CenterContainer(props) {
  const { children, className } = props;

  const nProps = Object.assign({}, props);
  delete nProps.className;
  delete nProps.children;

  const centerClass = classNames(centerContainerClass, className);

  return (
    <div className={centerClass} {...nProps}>
      {children}
    </div>
  );
}
export default CenterContainer;
