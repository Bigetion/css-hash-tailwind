import React, { createContext, useContext } from "react";

import { cssHash, classNames } from "css-hash";

const ShimmerContext = createContext();

const Shimmer = (props) => {
  const { children, config = {} } = props;

  const {
    backgroundSize = 1200,
    fromColor = "#f6f7f8",
    toColor = "#edeef1",
  } = config;

  const shimmerClassName = cssHash(
    (className) => `
    .${className} {
      -webkit-animation-duration: 2.2s;
      animation-duration: 2.2s;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-name: ${className}-animation;
      animation-name: ${className}-animation;
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      background: #e5f0fb;
      background: -webkit-linear-gradient(to right, ${fromColor} 5%, ${toColor} 20%, ${fromColor} 35%);
      background: linear-gradient(to right, ${fromColor} 5%, ${toColor} 20%, ${fromColor} 35%);
      -webkit-background-size: ${backgroundSize}px 100%;
      background-size: ${backgroundSize}px 100%;
    }
    @-webkit-keyframes ${className}-animation {
      0% {
        background-position: -100% 0;
      }
      100% {
        background-position: 100% 0;
      }
    }
    @keyframes ${className}-animation {
      0% {
        background-position: -${backgroundSize}px 0;
      }
      100% {
        background-position: ${backgroundSize}px 0;
      }
    }
  `
  );

  return (
    <ShimmerContext.Provider value={{ shimmerClassName }}>
      {children}
    </ShimmerContext.Provider>
  );
};

const Item = (props) => {
  const { className, width, height } = props;
  const { shimmerClassName } = useContext(ShimmerContext);

  const nProps = Object.assign({}, props, {
    className: classNames(shimmerClassName, className),
    style: Object.assign({}, props.style, { width, height }),
  });
  delete nProps.width;

  return <div {...nProps} />;
};

Shimmer.Item = Item;

export default Shimmer;
