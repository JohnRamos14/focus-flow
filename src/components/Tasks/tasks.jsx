import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import './tasks.css';

const Tasks = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const [userInput, setUserInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(userInput);
    // arr = [1,2,3,4] === [...arr + 5,6,7]
    setTasks([...tasks, userInput]);
    setUserInput('');
    e.target.reset();
  }

  function handleDelete(e) {
    e.preventDefault();
    console.log(e)
  }

  useEffect(() => {
    // storing input task
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function inputTaskValue(e) {
    // console.log(e.target.value)
    setUserInput(e.target.value)
  }

// TODO delete button per task

  return (
    <Card id="tasks-card">
      <Form  onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formTask">
          <Form.Label>Tasks</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task"
            onChange={(e) => inputTaskValue(e)}
          />
        </Form.Group>
        <Button id="tasks-btn" variant="light" type="submit">
          Submit
        </Button>
      </Form>

      <Table>
        <thead>
          <tr>
            <th className="tasks-header">Tasks</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task) => {
                return (

                <tr key={task}>
                    <td>
                        {task}
                    <Button id="delete-btn" type="submit" onClick={(e) => handleDelete(e)}>Delete</Button>
                    </td>
                </tr>
                )
          })}
        </tbody>
      </Table>
    </Card>
  );
};

export default Tasks;
