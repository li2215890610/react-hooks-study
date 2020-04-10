import React,{ useCallback, useEffect, useState} from "react";

const useResize = ()=>{

  const [ size, setSize] = useState({
    windth: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  
  const onResize = useCallback(()=>{
    setSize({
      windth: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  },[])

  useEffect(()=>{
    window.addEventListener("resize", onResize)
    return ()=>{
      window.removeEventListener("resize", onResize)
    }
  },[onResize])
  
  return size
}

export default ()=>{

  const size = useResize();
console.log(size);

  return <div>
    页面的Size: {size.windth} x {size.height}
  </div>
}