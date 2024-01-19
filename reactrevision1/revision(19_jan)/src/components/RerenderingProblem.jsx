import { useState } from "react";


function App(){

  const[title,setTitle]=useState("My name is naruto");

  return(
    <>
    <button onClick={setnewTitle}>Click me</button>
    <Header title={title}></Header>
    <Header title="My name is sasuke"></Header>
    
    </>
  )

  function setnewTitle(){
    setTitle("i am "+ Math.random());
  }
  
  
    

  }
  function Header({title}){
    return <div>
      {title}
    </div>
  }


export default App;