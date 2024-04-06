import { Routes, Route } from "react-router-dom"
import './App.css';
import NavBar from "./components/NavBar";
import MainMenuPage from "./pages/MainMenuPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <header className="inline">
        <NavBar />
      </header>
      <main className="w-10/12 mx-auto">
        <Routes>
          <Route path="/" element={<MainMenuPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
