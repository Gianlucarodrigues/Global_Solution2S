import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SkillMatch from "./pages/SkillMatch";
import "./styles/App.css";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/skillmatch" element={<SkillMatch />} />
      </Routes>

      <Footer /> 
    </>
  );
}

