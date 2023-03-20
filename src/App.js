import logo from "./logo.svg";
import "./App.css";
import GetStarted from "./components/GetStarted";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import SuperMarket from "./pages/super_market/SuperMarket";
import Login from "./components/Login";
import AddProduct from "./pages/super_market/AddProduct";
import Customer from "./pages/customer/Customer";
import Cart from "./pages/customer/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/getStarted" element={<GetStarted />} />

        {/* Login and Signup */}
        <Route path="/signUp" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* supermarket */}
        <Route path="/supermarket" element={<SuperMarket />} />
        <Route path="/addproduct" element={<AddProduct />} />

        {/* customer */}
        <Route path="/customer" element={<Customer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
