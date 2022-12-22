import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainNav from "./components/navbar/MainNav";
import Multivideos from "./components/video/Multivideos";
import Home from "./components/Home";
import "./App.css";
import Footer from "./components/navbar/Footer";
import MusicSelection from "./components/music/MusicSelection";
import NowPlaying from "./components/music/NowPlaying";
import TasksPage from "./components/Tasks/TasksPage";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="main">
        <MainNav />
        {location.pathname === "/" && (
          <>
            <Home />
          </>
        )}
      </div>
      <Routes>
        <Route path="/multivideos" element={<Multivideos />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/musicSelection" element={<MusicSelection />} />
        <Route exact path="/now-playing" element={<NowPlaying />} />
      </Routes>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </>
  );
}
export default App;
