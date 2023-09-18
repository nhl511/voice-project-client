import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import RegisterSeller from "./pages/Register/RegisterSeller";
import VoiceProfile from "./pages/VoiceProfile/VoiceProfile";
import BankAccount from "./pages/BankAccount/BankAccount";
import RegisterBuyer from "./pages/Register/RegisterBuyer";
const App = () => {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bank" element={<BankAccount />} />
            <Route path="/register" element={<RegisterSeller />} />
            <Route path="/register2" element={<RegisterBuyer />} />
            <Route path="/profile" element={<VoiceProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
