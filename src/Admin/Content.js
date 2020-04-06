import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Example from "../Example";
import Example2 from "../Example2";
import Example3 from "../Example3";
import Example4 from "../Example4";
import Example5 from "../Example5";
import Example6 from "../Example6/Example6";
import Example7 from "../Example7";
import Example8 from "../Example8";
import Example9 from "../Example9";
import Example10 from "../Example10";
import Example11 from "../Example11";
import Example12 from "../Example12";

function Content() {

  return (
    <Switch>
      <Route exact path="/" component={() => (<Redirect to="/Example" />)} />
      <Route path="/Example" component={Example} />
      <Route path="/Example2" component={Example2} />
      <Route path="/Example3" component={Example3} />
      <Route path="/Example4" component={Example4} />
      <Route path="/Example5" component={Example5} />
      <Route path="/Example6" component={Example6} />
      <Route path="/Example7" component={Example7} />
      <Route path="/Example8" component={Example8} />
      <Route path="/Example9" component={Example9} />
      <Route path="/Example10" component={Example10} />
      <Route path="/Example11" component={Example11} />
      <Route path="/Example12" component={Example12} />
    </Switch>
  )
}

export default Content