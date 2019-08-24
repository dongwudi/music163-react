import React from "react";
import { render } from "react-dom";
import "./index.css";
import cRoutes from "@/router";

import { Provider } from "react-redux";
import store from "./store";

render(
  <Provider store={store}>
    {cRoutes}
  </Provider>,
  document.getElementById("root")
);
