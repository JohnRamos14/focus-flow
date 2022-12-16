import React from 'react';
import { Routes, Route } from "react-router-dom";
import Youtube from  './components/video/Youtube';
import Tasks from './components/Tasks/tasks';
import MainNav from  './components/navbar/MainNav';
import Multivideos from './components/video/Multivideos';
import Home from './components/Home';
// import './App.css'


function App() {
  return(
    <>
    <div className='main'>
    <MainNav/>
    <Youtube />
    <Home/>

    </div>

    <Routes>
        <Route path="/Multivideos" element={<Multivideos />} />
        <Route path="/tasks" element={<Tasks />} /> 
    </Routes>

    </>
  ) 
}

export default App;