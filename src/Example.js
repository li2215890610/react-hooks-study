import React, { useState} from 'react';

function Example() {

  const [ count, setCount] = useState(0);
  // ES6 语法中的数组解构导出
  // useState(0) 参数 0 是初始化数据
  // 导出的数据 
  // count [ 当前数据值, 修改数据的方法]
  return (
    <div>
     <h2>记录点击{count}次</h2>

     {/* 下面是错误的 必须嵌套一个函数*/}
     {/* <button onClick={
       setCount(count+1)
     }>点我</button> */}
     
     <button onClick={()=>{
       setCount(count+1)
     }}>点我</button>
    </div>
  );
}

export default Example;
