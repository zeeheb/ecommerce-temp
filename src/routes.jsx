import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import OnlineStore from "./pages/OnlineStore";
import Cart from "./pages/Cart";
import Item from "./pages/Item"

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/store' component={OnlineStore}></Route>
        <Route path='/cart' component={Cart}></Route>
        <Route path='/item/:id' component={Item}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
