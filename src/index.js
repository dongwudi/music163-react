import React from "react";
import { render } from "react-dom";
import "./assets/scss/index.scss";
import cRoutes from "@/router";

import { Provider } from "react-redux";
import store from "./store";

render(
  <Provider store={store}>
    {cRoutes}
  </Provider>,
  document.getElementById("root")
);
