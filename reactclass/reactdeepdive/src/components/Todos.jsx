import React from "react";
import { useState } from "react";
let counter=4;
function Todorender(){
    const[todos,setTodos]=useState([{
        id: 1,
        title : "Go to gym",
        description: "Go to gym from 5 to 9"
    },{
        id: 2,
        title : "Go to dinner",
        description: "Go to gym from 9 to 9:30"
    },{
        id: 3,
        title : "Go to coding",
        description: "Go to gym from 9:30 to 11"
    }])

    function Addtodos(){

        //The cleaner syntax to do this is
        setTodos([...todos, {
            id: counter++,
            title: Math.random(),
            description: Math.random()
        }])
        // const newTodos = [];
        // for(let i=0;i< todos.length;i++){
        //     newtodos.push(todos[i]);
        // }
        // newTodos.push({
        //     id: 4,
        //     title: Math.random(),
        //     description: Math.random()

        // })
        // setTodos(newTodos)
    }
    return(
        <div>
            <button onClick={Addtodos}>Add todos</button>
            {todos.map(function(todo){
                return <Todo key={todo.id} title={todo.title} description={todo.description} />
            })}
        </div>
    )
}
function Todo({title, description}){
    return <div>
        <h1>
            {title}
        </h1>
        <h5>
            {description}
        </h5>
    </div>
}

export default Todorender