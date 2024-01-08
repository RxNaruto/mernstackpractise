import React from "react";
import { useState } from "react";

const SumOfTwoNumber=()=>{
    const[number1,setnumber1]=useState(" ");
    const[number2,setnumber2]=useState(" ");
    const[sol,setsol]=useState(" ");

    const Result=()=>{
        return setsol(Number(number1) + Number(number2));
    }

    const inputNumber1=(event)=>{
        const input1 = event.target.value.replace(/[^0-9]/g, '');
        return setnumber1(input1);
    }
    const inputNumber2=(event)=>{
        const input2 = event.target.value.replace(/[^0-9]/g, '');
        return setnumber2(input2);
    }
    return <div>
        <input type="text" placeholder="Enter number1"  value={number1} onChange={inputNumber1} /><br />
        <input type="text" placeholder="Enter number2"  value={number2} onChange={inputNumber2}/><br />
        <button onClick={Result}>Sum</button>
        <p>The sum is : {sol}</p>
    </div>
}
export default SumOfTwoNumber;