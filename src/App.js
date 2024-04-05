import { Routes, Route } from "react-router-dom"
import './App.css';
import NavBar from "./components/NavBar";
import MainMenuPage from "./pages/MainMenuPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainMenuPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
