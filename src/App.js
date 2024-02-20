import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

import generateTailwindCss from "./tailwind_v3";
import { cssHash } from "css-hash";

import routes from "routes";

import Layout from "components/BaseLayout";
import PageLoader from "components/PageLoader";

generateTailwindCss({
  variants: {
    extend: {
      borderWidth: ["first", "last"],
    },
  },
});

cssHash(
  () => `
    html {
      line-height: 1.5;
      font-family: Quicksand, sans-serif;
    }
    .bg-square {
      background: conic-gradient(from 90deg at 1px 1px, #F8FAFC 90deg, #F4F6FA 0) -1px -1px/32px 32px; 
    }
    .font-mono {
      font-family: "Fira Code", sans-serif;
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
