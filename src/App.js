import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import Login from "./pages/login/Login";
import CreateAccount from "./pages/account-creation/CreateAccount";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/create-account" element={<CreateAccount />}></Route>
    </Routes>
  );
}

export default App;
