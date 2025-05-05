import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Signin from "../src/components/signin/index";
import Signup from "../src/components/signup/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
