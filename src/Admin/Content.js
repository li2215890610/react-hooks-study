import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Example from "../Example";
import Example2 from "../Example2";
import Example3 from "../Example3";
import Example4 from "../Example4";
import Example5 from "../Example5";

function Content() {

  return (
    <Switch>
      <Route exact path="/" component={() => (<Redirect to="/Example" />)} />
      <Route path="/Example" component={Example} />
      <Route path="/Example2" component={Example2} />
      <Route path="/Example3" component={Example3} />
      <Route path="/Example4" component={Example4} />
      <Route path="/Example5" component={Example5} />
      <Route path="/Example6" component={Example4} />
      <Route path="/Example7" component={Example4} />

    </Switch>
  )
}

export default Content