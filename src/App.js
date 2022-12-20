import React from "react";
import { Routes, Route } from "react-router-dom";
import Tasks from "./components/Tasks/tasks";
import MainNav from "./components/navbar/MainNav";
import Multivideos from "./components/video/Multivideos";
import Home from "./components/Home";
import './App.css'
import Footer from "./components/navbar/Footer";
import MusicSelection from "./components/music/MusicSelection";
import NowPlaying from "./components/music/NowPlaying";

function App() {
  return (
    <>
      <div className="main">
        <MainNav />
        {/* Only render the Youtube component on the home page */}
        {window.location.pathname === "/" && (
          <>
            <Home />
    
          </>
        )}
      </div>
      <Routes>
        <Route path="/multivideos" element={<Multivideos />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/musicSelection" element={<MusicSelection />} />
        <Route exact path="/now-playing" element={<NowPlaying />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
