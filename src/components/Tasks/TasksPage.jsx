import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Tasks from './tasks';
import "./TasksPage.css"

const TasksPage = () => {
    const navigate = useNavigate();
    return (
        <div id='tasks-container'>
           <div id='vid-select-container'>
           <Button id='vid-select-btn' onClick={() => navigate("/multivideos") }>Video Selection</Button>
           </div>
           <Tasks /> 
        </div>
    )
}
export default TasksPage;