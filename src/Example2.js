import React,{ useState } from "react";


function Example2() {
  const [ name] = useState("jack");
  const [ age] = useState(27);
  const [ work] = useState("新闻记者");


  return (<div>
    {name}今年{age}职业{work}
  </div>)
}

export default Example2