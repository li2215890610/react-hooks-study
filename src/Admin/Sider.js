import React from "react";
import { Link } from "react-router-dom";

function Sider() {

  return (<div>
    <section>
      <Link to='/Example'>useState1</Link>
    </section>
    <section>
      <Link to='/Example2'>useState2</Link>
    </section>
    <section>
      <Link to='/Example3'>useEffect</Link>
    </section>
    <section>
      <Link to='/Example4'>useContext</Link>
    </section>
    <section>
      <Link to='/Example5'>useReducer</Link>
    </section>
    <section>
      <Link to='/Example6'>useReducer、useContext实例</Link>
    </section>
    <section>
      <Link to='/Example7'>useMemo</Link>
    </section>
    <section>
      <Link to='/Example8'>useRef</Link>
    </section>
    <section>
      <Link to='/Example9'>useLayoutEffect</Link>
    </section>
    <section>
      <Link to='/Example10'>useImperativeHandle</Link>
    </section>
    <section>
      <Link to='/Example11'>useDebugValue</Link>
    </section>
    <section>
      <Link to='/Example12'>useCallback</Link>
    </section>
  
  </div>)
}

export default Sider