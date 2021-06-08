import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";


function Index() {
  // 类似于  componentDidUpdate,componentDidMount
  useEffect(() => {
    console.log('我进来了 Index ');
  }, [])

  useEffect(() => {
    return () => {
      // componentWillUnmont  组件销毁
      console.log('我离开了 --- Index');
    }
  }, [])


  return <div>来了老弟 ---》 Index</div>
}

function List() {

  // 类似于  componentDidUpdate,componentDidMount
  useEffect(() => {
    console.log('我进来了 List ');
  }, [])

  useEffect(() => {
    return () => {
      // componentWillUnmont  组件销毁
      console.log('我离开了 --- List');
    }
  }, [])

  return <div>来了老弟 ---》 List</div>
}

let showComponent = false;

export default () => {

  const [count, setCount] = useState(0)

  // 类似于  componentDidUpdate,componentDidMount
  useEffect(() => {

    if (showComponent) {
      console.log(`
        count 变化了
        类似于 componentDidUpdate
      `);
    } else {
      showComponent = true
      console.log(`
        count 变化了
        类似于componentDidMount
      `);
    }

    //监听 count ，count变化就执行
  }, [count])

  useEffect(() => {

    return () => {
      // componentWillUnmont  组件销毁
      console.log('我离开了/Example3  ');

    }
  }, [])

  return (<div>

    <h2>记录点击{count}次</h2>

    <button onClick={() => {
      setCount(count + 1)
    }}>点我</button>

    <div>
      <br />
      <Link to="/Example3/index">/Example3/index</Link>
      <br />
      <br />
      <Link to="/Example3/list">/Example3/list</Link>
    </div>
    <Route path="/Example3/index" component={Index} />
    <Route path="/Example3/list" component={List} />

  </div>)
}