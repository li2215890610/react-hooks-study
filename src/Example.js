import React, { useState} from 'react';

function Example() {

  const [ count, setCount] = useState(0);

  return (
    <div>
     <h2>记录点击{count}次</h2>

     <button onClick={()=>{
       setCount(count+1)
     }}>点我</button>

     {/* 下面是错误的 */}
     {/* <button onClick={
       setCount(count+1)
     }>点我</button> */}
    </div>
  );
}

export default Example;
