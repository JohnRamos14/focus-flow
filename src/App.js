import React from "react";
import { Routes, Route } from "react-router-dom";
import Youtube from "./components/video/Youtube";
import Tasks from "./components/Tasks/tasks";
import MainNav from "./components/navbar/MainNav";
import Multivideos from "./components/video/Multivideos";
// import './App.css'

function App() {
  return (
    <>
    <div className="main">
        <MainNav />
        {/* Only render the Youtube component on the home page */}
        {window.location.pathname === '/' && <Youtube />}
      </div>
      <Routes>
        <Route path="/multivideos" element={<Multivideos />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
  </>
  );
}

export default App;
