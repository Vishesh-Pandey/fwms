import logo from "./logo.svg";
import "./App.css";
import GetStarted from "./components/GetStarted";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/getStarted" element={<GetStarted />} />
        <Route path="/signUp" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
