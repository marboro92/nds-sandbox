import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Details } from "./Details";
import { Custom } from "./Custom";
/* Import routes here */
import { Charts } from "./Charts";

export const Pages = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/details">
        <Details />
      </Route>
      <Route path="/custom">
        <Custom />
      </Route>
      {/* Add routes here */}
      <Route path="/charts">
        <Charts />
      </Route>
    </Switch>
  );
};
