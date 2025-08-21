import { useState } from "react";
import "./App.css";
import "./index.css";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
import Eduction from "./components/sections/Eduction";
import Skils from "./components/sections/Skils";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoading && <LoadingScreen onComplete={() => setIsLoading(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoading ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        {/* Navbar (handles both desktop + mobile) */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Sections */}
        <Home />
        <About />
        <Skils />
        <Eduction />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
