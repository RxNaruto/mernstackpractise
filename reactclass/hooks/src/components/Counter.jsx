import React from "react";
import { useState } from "react";

const Counter=()=>{
   const[count,setCount]=useState(0);

   return  <div>
    <button onClick={function(){
      setCount(count+1);
    }}>count {count}</button>
   </div>
}

export default Counter;