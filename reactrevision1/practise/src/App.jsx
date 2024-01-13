import { useState } from "react";
import React  from "react";

const App=()=>{
  return <div>
    hi there
    <Counter>hi there</Counter>

  </div>
}
const Counter=()=>{
  const[count,setCount]=useState(0);

  const IncreaseCount=()=>{
    return setCount(count+1);
    
  }

  return <div>
    <button onClick={IncreaseCount}>Counter: {count}</button>
  </div>
}
export default App;