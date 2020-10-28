import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import OnlineStore from "./pages/OnlineStore";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/store" component={OnlineStore}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
