import { useState,useEffect } from "react"
import React from "react"

const RendreTodo=()=>{
    return <div>
     <FetchTodo></FetchTodo>
    </div>
}

const FetchTodo=()=>{
    const[todos,setTodos]=useState("This is initial do");

    useEffect(()=>{
        fetch("https://sum-server.100xdevs.com/todos")
        .then(async(res)=>{
            const json = await res.json();
            setTodos(json.todos);
        })
    },[])

    return <div>
        json
    </div>

}