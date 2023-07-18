import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import Login from "./pages/login/Login";
import CreateAccount from "./pages/account-creation/CreateAccount";
import HomePage from "./pages/homePage/HomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
