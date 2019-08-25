import React, { Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { top, subs } from "./config";
import { NotMatch } from "./loadCom";
import TopCom from "@/components/TopCom";
import Spin from "@/components/Spin";

// _routes
let _routes = [];
[...top, ...subs].forEach(route => {
  let { path, exact, component, name } = route;
  if (component) {
    _routes.push(
      <Route exact={exact} key={name} path={path} component={component} />
    );
  }
});

const cRoutes = (
  <Router>
    <TopCom />
    <Suspense fallback={<Spin tip="Loading..." />}>
      <Switch>
        {_routes}
        <Route component={NotMatch} />
      </Switch>
    </Suspense>
    {/* footer */}
    <div className="g-ft"></div>
  </Router>
);

export default cRoutes;
