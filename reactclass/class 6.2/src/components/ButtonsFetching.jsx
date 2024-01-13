import React from "react";
import { useState,useEffect } from "react";
import axios from axios

const App=()=>{
    const[Id,SetId]=useState(1);
    return <div>
         <button onClick={SetId(1)}>1</button>
         <button onClick={SetId(2)}>2</button>
         <button onClick={SetId(3)}>3</button>
         <button onClick={SetId(4)}>4</button>
         
         <Todo id={Id}></Todo>
    </div>

    

}
function Todo({id}){
    const[todo,setTodos]=useState({});
    useEffect(()=>{
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    },[id])

    return <div>
        Id: {id}
        <h1>
            {todo.title}
        </h1>
        <h4>
            {todo.description}
        </h4>
    </div>
}