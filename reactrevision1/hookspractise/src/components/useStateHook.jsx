
import { useState } from "react"

const Counter=()=>{
    const[count,setCount]=useState(0);

    const IncreaseCounter=()=>{
        setCount(count+1);
    }
    return <div>
        <button onClick={IncreaseCounter}>Count {count}</button>
    </div>
}

export default Counter