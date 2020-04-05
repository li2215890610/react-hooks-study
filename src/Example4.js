import React,{ useState, createContext ,useContext } from "react";

  //  createContext ,useContext 配合使用 父子组件传值

const CreateContextValue = createContext() //创建上下文

function Counter(props) {

  const { count, text} = useContext(CreateContextValue) //接收上下文数据

  return (<h2 onClick={()=>{
    props.onClick(count)
  }}>
    {count}{text}
  </h2>)
}

export default ()=>{

  const [ count, setCount] = useState(0);

  function onClick(number) {
    alert(number)
  }

  return (
    <div>
     <h2>记录点击{count}次</h2>

     <button onClick={()=>{
       setCount(count+1)
     }}>点我</button>
    
    <CreateContextValue.Provider value={{
      count,
      text: '我是一个普通文本'
    }}>
      <Counter onClick={onClick}/>
    </CreateContextValue.Provider>
  </div>)
}