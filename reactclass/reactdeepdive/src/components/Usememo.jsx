import React,{memo} from "react";
import { useState } from "react";

const App=()=>{
    const[title,setTitle]=usestate("my name is harkiart");
    const UpdateTitle=()=>{
        setTitle("my name is "+ Math.random());
    }

    return(
        <div>
            <button onClick={UpdateTitle}>Update</button>
            <Header title={title}></Header>
            <Header title="harkirat2"></Header>
            <Header title="harkirat3"></Header>
            <Header title="harkirat4"></Header>
        </div>
    )
}
const Header=React.memo(function Header({title}){
    return <div>{title}</div>
    

       
})