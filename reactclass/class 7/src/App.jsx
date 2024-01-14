import React from "react";
import { BrowserRouter,Routes,Route, useNavigate } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";

function App(){
  
  return(
    

    <div>
     
    <BrowserRouter>
    <Appbar></Appbar>
    <Routes>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/" element={<Landing></Landing>}></Route>

    </Routes>
    </BrowserRouter>
    </div>
  )
}
function Appbar(){
  const navigate= useNavigate();
  return <div>
     <div>
        <button onClick={()=>{
         navigate("/");
        }}>Landing Page</button>
        <button onClick={()=>{
           navigate("/dashboard");
        }}>Dashboard</button>
      </div>

  </div>
}

export default App