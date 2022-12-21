import React from 'react';
import { Button } from 'react-bootstrap';
import Tasks from './tasks';
import "./TasksPage.css"

const TasksPage = () => {
    return (
        <div id='tasks-container'>
           <div id='vid-select-container'>
           <Button id='vid-select-btn' href='./multivideos'>Video Selection</Button>
           </div>
           <Tasks /> 
        </div>
    )
}
export default TasksPage;