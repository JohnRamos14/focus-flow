import React from 'react';
import { Routes, Route } from "react-router-dom";
import Youtube from  '../src/components/video/Youtube';
import Tasks from './components/Tasks/tasks';
// import './App.css'


function App() {
  return(
    <div className='main'>
    <Youtube />
    <Routes>
    <Route path="/tasks" element={<Tasks />} /> 
    </Routes>
    </div>
  ) 
}

export default App;
