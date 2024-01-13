import React from "react";
import { useState } from "react";

const Counter=()=>{
    const[count,setCount]=useState(0);

    const IncreseCount=()=>{
        return setCount(count+1);
    }

    return <div>
        <button onClick={IncreseCount}>Count {count} </button>
    </div>
}
export default Counter