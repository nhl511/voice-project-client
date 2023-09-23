import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
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
import PersistLogin from "./components/PersistLogin/PersistLogin";
import Posts from "./pages/Posts/Posts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/bank" element={<BankAccount />} />
        <Route path="/register" element={<RegisterSeller />} />
        <Route path="/register2" element={<RegisterBuyer />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/listvoice" element={<ListVoice />} />
        <Route path="/voicedetail/:id" element={<VoiceDetail />} />
        <Route path="/profile" element={<VoiceProfile />} />

        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={["buyer"]} />}>
            <Route path="/voices" element={<Voices />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={["seller"]} />}>
            <Route path="/posts" element={<Posts />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
