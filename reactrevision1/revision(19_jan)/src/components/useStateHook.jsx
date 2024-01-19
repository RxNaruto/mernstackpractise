import { useState } from "react"

const App=()=>{
  const[count,setCount]=useState(0);

  const IncreaseCount=()=>{
    setCount(count+1);
  }

  return(
    <>
    <button onClick={IncreaseCount}>Count {count}</button>
    
    </>
  )
}
export default App 