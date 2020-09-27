import React from 'react';
import { cssHash, classNames } from 'css-hash';

const xCenterContainerClass = cssHash(
  className => `
    .${className} {
      position: relative;
    }
    .${className} > :first-child {
      position: absolute;
      left: 50%;
      transform: translateX(-50%)
    }
  `,
);

const yCenterContainerClass = cssHash(
  className => `
    .${className} {
      position: relative;
    }
    .${className} > :first-child {
      position: absolute;
      top: 50%;
      transform: translateY(-50%)
    }
  `,
);

function CenterContainer(props) {
  const { children, className, position = '' } = props;

  const nProps = Object.assign({}, props);
  delete nProps.className;
  delete nProps.children;

  const xy = position !== 'x' && position !== 'y';
  const centerClass = classNames(
    position === 'x' && xCenterContainerClass,
    position === 'y' && yCenterContainerClass,
    xy && `${xCenterContainerClass} ${yCenterContainerClass}`,
    className,
  );

  return (
    <div className={centerClass} {...nProps}>
      {children}
    </div>
  );
}
export default CenterContainer;
