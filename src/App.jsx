import Header from "./Components/Header";
import Home from "./Pages/Home";
import Card from "./Pages/Card";
import Checkout from "./Pages/CheckOut";
import Orders from "./Pages/Orders";

import { Routes, Route } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/cart" element={<Card />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/order" element={<Orders />} />
      </Routes>
    </>
  );
}
export default App