import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Example from "../Example";
import Example2 from "../Example2";


function Content() {

  return (
    <Switch>
      <Route exact path="/" component={() => (<Redirect to="/Example" />)} />
      <Route exact path="/Example" component={Example} />
      <Route exact path="/Example2" component={Example2} />
    </Switch>
  )
}

export default Content