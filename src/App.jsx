import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agents from "./pages/Agents";
import Projects from "./pages/Projects";
import Navbar from "./components/navigation/Navbar";
import FullscreenNav from "./components/navigation/FullscreenNav";


function App() {

  return (

    <div>
      <Navbar />
      <FullscreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
