import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";

function App(){
  return(

    <div>
      <div>
        <button onClick={()=>{
          window.location.href="/"
        }}>Landing Page</button>
        <button onClick={()=>{
           window.location.href="/dashboard"
        }}>Dashboard</button>
      </div>
    <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/" element={<Landing></Landing>}></Route>

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App