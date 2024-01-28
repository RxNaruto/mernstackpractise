import { Route,BrowserRouter,Routes } from "react-router-dom";
import { Signup } from "./pages/SignUp";
import { Signin } from "./pages/SingIn";


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signup element={<Signup />}" />
      <Route path="/signin element={<Signin />}" />
      {/* <Route path="/signup element={<Signup />}" />
      <Route path="/signup element={<Signup />}" /> */}

    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App