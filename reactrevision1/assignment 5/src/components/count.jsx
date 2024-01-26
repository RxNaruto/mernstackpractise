import { useState } from "react";

const Count=()=>{
    const[count,setCount]=useState(0);

    const IncreseCount=()=>{
        setCount(count+1);
    }
    return(
        <div>
            <button onClick={IncreseCount}>Count {count}</button>
        </div>
    )
}
export default Count