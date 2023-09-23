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
import Voices from "./pages/Voices/Voices";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Layout from "./pages/Layout/Layout";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import ListVoice from "./pages/ListVoice/ListVoice";
import VoiceDetail from "./pages/VoiceDetail/VoiceDetail";
import ProjectUpload from "./pages/ProjectUpload/ProjectUpload";
import ProjectApproval from "./pages/ProjectApproval/ProjectApproval";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/bank" element={<BankAccount />} />
        <Route path="/register" element={<RegisterSeller />} />
        <Route path="/register2" element={<RegisterBuyer />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/listvoice" element={<ListVoice />} />
        <Route path="/voicedetail" element={<VoiceDetail />} />

        <Route element={<RequireAuth allowedRoles={["buyer", "seller"]} />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["buyer"]} />}>
          <Route path="/voices" element={<Voices />} />
          <Route path="/upload" element={<ProjectUpload />} />
          <Route path="/approval" element={<ProjectApproval />} />

        </Route>
        <Route element={<RequireAuth allowedRoles={["seller"]} />}>
          <Route path="/profile" element={<VoiceProfile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
