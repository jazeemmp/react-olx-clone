// App.js
import React, { useContext } from "react";
import HomePage from "./pages/HomePage";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PopupProvider } from "./Contexts/SignupContext";
import { UserProvider } from "./Contexts/UserContext";
import ProductDetails from "./pages/ProductDetails";
import SellProduct from "./pages/SellProduct";

const App = () => {
  return (
    <div>
      <PopupProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sell" element={<SellProduct/>}/>
            <Route path="/product/:id" element={< ProductDetails/>}/>
          </Routes>
        </Router>
        <Signup/>
      </UserProvider>
      </PopupProvider>
    </div>
  );
};

export default App;
