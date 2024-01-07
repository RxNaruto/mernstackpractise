import { useState } from "react";


 function Count(){
    const[count,setCount]=useState(0);

    function IncreseCount(){
        return setCount(count+1);
    }
    
    return(
        <div>
            <button onClick={IncreseCount}>Count {count}</button>
        </div>
    )
}
export default Count