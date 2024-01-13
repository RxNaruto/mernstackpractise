import React from "react";
import { useState } from "react";

const Counter=()=>{
    const[count,setCount]=useState(0);

    const IncreaseCount=()=>{
         return setCount(count+1);
    }

    return <div>
        <button onClick={IncreaseCount}>Count {count}</button>
    </div>
}

export default Counter;