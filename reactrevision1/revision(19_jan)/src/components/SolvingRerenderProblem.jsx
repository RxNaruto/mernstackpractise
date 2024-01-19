import { useState } from "react";


function App(){

 

  return(
    <>
    <HeaderWithButton></HeaderWithButton>
    <Header title="My name is sasuke"></Header>
    
    </>
  )
  function HeaderWithButton(){
    const[title,setTitle]=useState("My name is naruto");
    
    function setnewTitle(){
      setTitle("i am "+ Math.random());
    }
    return(
      <>
      <button onClick={setnewTitle}>Click me</button>
      <Header title={title}></Header>
      
      </>
    )

  }

 
  
  
    

  }
  function Header({title}){
    return <div>
      {title}
    </div>
  }


export default App;