import React from "react";
import { Link } from "react-router-dom";

function Sider() {

  return (<div>
    <section>
      <Link to='Example'>useState1</Link>
    </section>
    <section>
      <Link to='Example2'>useState2</Link>
    </section>
  </div>)
}

export default Sider