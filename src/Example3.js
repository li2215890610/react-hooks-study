import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";


function Index(params) {
  // 类似于  componentDidUpdate,componentDidMount
  useEffect(() => {

    return () => {
      // componentWillUnmont  组件销毁
      console.log('我离开了 --- Index');
    }
  }, [])
  return <div>来了老弟 ---》 Index</div>
}

function List(params) {

  // 类似于  componentDidUpdate,componentDidMount
  useEffect(() => {

    return () => {
      // componentWillUnmont  组件销毁
      console.log('我离开了 --- List');
    }
  }, [])

  return <div>来了老弟 ---》 List</div>
}


export default () => {

  const [count, setCount] = useState(0)

  // 类似于  componentDidUpdate,componentDidMount
  useEffect(() => {

    return () => {
      // componentWillUnmont  组件销毁
      console.log('我离开了/Example3  ');

    }
    //监听 count ，count变化就执行
  }, [count])

  return (<div>

    <h2>记录点击{count}次</h2>

    <button onClick={() => {
      setCount(count + 1)
    }}>点我</button>

    <div>
      <br/>
      <Link to="/Example3/index">/Example3/index</Link>
      <br/>
      <br/>
      <Link to="/Example3/list">/Example3/list</Link>
    </div>
    <Route path="/Example3/index" component={Index} />
    <Route path="/Example3/list" component={List} />

  </div>)
}