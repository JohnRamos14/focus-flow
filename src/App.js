import React from "react";
import { Routes, Route } from "react-router-dom";
import Youtube from "./components/video/Youtube";
import Tasks from "./components/Tasks/tasks";
import MainNav from "./components/navbar/MainNav";
import Multivideos from "./components/video/Multivideos";
import Home from "./components/Home";
import Music from "./components/music/MusicPlayer";
// import './App.css'

function App() {
  return (
    <>
      <div className="main">
        <MainNav />
        {/* <MusicPlayer /> */}
        {/* Only render the Youtube component on the home page */}
        {window.location.pathname === "/" && (
          <>

            <Home />
            <Youtube />
          </>
        )}
      </div>
      <Routes>
        <Route path="/multivideos" element={<Multivideos />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </>
  );
}

export default App;
