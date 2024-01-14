import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";

function App(){
  return(

    <div>
      <div style={{background:"black", color: "white"}}>
        Hi this is top bar
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