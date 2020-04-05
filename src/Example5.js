import React,{ useReducer} from "react";

function handleData(state,action) {
  
  switch (action.type) {
    case 'ADD':
      return{
        ...state,
        count: state.count +1 
      }  
    
    case 'SUB':
        return{
          ...state,
          count: state.count -1 
        }  

    default:
      return state
  }
}

export default ()=>{
  
  const [ data, dispatch] = useReducer(handleData,{ count: 0})
  
  return(<div>
    
    <h4>现在的分数是 {data.count}</h4>

    <button onClick={()=>{
      dispatch({type: "ADD"})
    }}>Increment</button>
    <button onClick={()=>{
      dispatch({type: "SUB"})
    }}>Decrement</button>

  </div>)
}