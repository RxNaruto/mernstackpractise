import { Signup } from "./pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup></Signup>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
