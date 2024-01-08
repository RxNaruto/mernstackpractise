import { useState } from "react";

function SumofTwoNumbers(){
    const[number1,newnumber1]=useState("");
    const[number2,newnumber2]=useState("");
    const[sol,newsol]=useState(0);

    function Res(){
        return newsol(Number(number1)+ Number(number2));
    }

    function inputNumber1(event){
        const input1 = event.target.value.replace(/[^0-9]/g, '');
        return newnumber1(input1);
    }
    function inputNumber2(event){
        const input2 = event.target.value.replace(/[^0-9]/g, '');
        return newnumber2(input2);
    }

    return(
        <div>
            <input type="text" placeholder="Enter number 1" value={number1} onChange={inputNumber1} />
            <input type="text" placeholder="Enter number 2" value={number2} onChange={inputNumber2} />
            <button onClick={Res}>sum</button><br />
            <p>Sum : {sol}</p>
        </div>
    )
}
export default SumofTwoNumbers