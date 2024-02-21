import React from "react";
import { cssHash, classNames } from "css_hash";

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

const centerXContainerClass = cssHash(
  (className) => `
    .${className} {
      position: relative;
    }
    .${className} > :first-child {
      position: absolute;
      top: 50%;
      left: 0%;
      transform: translate(-0%, -50%);
    }
  `
);

const centerYContainerClass = cssHash(
  (className) => `
    .${className} {
      position: relative;
    }
    .${className} > :first-child {
      position: absolute;
      top: 0%;
      left: 50%;
      transform: translate(-50%, -0%);
    }
  `
);

function CenterContainer(props) {
  const { children, className, position = "" } = props;

  const nProps = Object.assign({}, props);
  delete nProps.className;
  delete nProps.children;

  const xy = position !== "x" && position !== "y";
  const centerClass = classNames(
    position === "x" && centerXContainerClass,
    position === "y" && centerYContainerClass,
    xy && `${centerContainerClass}`,
    className
  );

  return (
    <div className={centerClass} {...nProps}>
      {children}
    </div>
  );
}
export default CenterContainer;
