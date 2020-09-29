import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

import { cssHash } from "css-hash";

import routes from "routes";

import "tailwind/style/base";
import "tailwind/style/align";
import "tailwind/style/bg";
import "tailwind/style/border";
import "tailwind/style/box";
import "tailwind/style/clear";
import "tailwind/style/container";
import "tailwind/style/display";
import "tailwind/style/divide";
import "tailwind/style/flex";
import "tailwind/style/float";
import "tailwind/style/form";
import "tailwind/style/gradient";
import "tailwind/style/grid";
import "tailwind/style/height";
import "tailwind/style/interactivity";
import "tailwind/style/justify";
import "tailwind/style/leading";
import "tailwind/style/list";
import "tailwind/style/margin";
import "tailwind/style/object";
import "tailwind/style/opacity";
import "tailwind/style/overflow";
import "tailwind/style/overscroll";
import "tailwind/style/padding";
import "tailwind/style/place";
import "tailwind/style/placeholder";
import "tailwind/style/position";
import "tailwind/style/shadow";
import "tailwind/style/space";
import "tailwind/style/text";
import "tailwind/style/tracking";
import "tailwind/style/visibility";
import "tailwind/style/width";
import "tailwind/style/zindex";

import Layout from "components/BaseLayout";
import PageLoader from "components/PageLoader";

cssHash(
  () => `
    html {
      line-height: 1.5;
      font-family: Inter, sans-serif;
    }
  `
);

const loadComponent = (component) =>
  Loadable({
    loader: component,
    loading: PageLoader,
  });

function App() {
  return (
    <React.Fragment>
      <Router>
        <Layout>
          <Switch>
            {routes.map(({ id, path, component, exact }) => (
              <Route
                key={id}
                path={path}
                component={loadComponent(component)}
                exact={exact}
              />
            ))}
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
