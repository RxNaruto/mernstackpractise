import { Signup } from "./pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Usercr } from "./pages/usercr";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup></Signup>} />
          <Route path="/usercr" element={<Usercr></Usercr>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
