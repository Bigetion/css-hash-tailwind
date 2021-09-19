import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

import generateTailwindCss from "tailwind-css-generator";
import { cssHash } from "css-hash";

import routes from "routes";

import Layout from "components/BaseLayout";
import PageLoader from "components/PageLoader";

generateTailwindCss();

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
