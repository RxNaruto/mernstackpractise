import { useEffect, useState } from "react"

const App=()=>{
  const[count,setCount]=useState(0);

  const IncreaseCount=()=>{
    setCount(count+1);
  }
  useEffect(()=>{
    console.log("The count is",count);
  },[count])

  return(
    <>
    <button onClick={IncreaseCount}>Count {count}</button>
    
    </>
  )
}
export default App 