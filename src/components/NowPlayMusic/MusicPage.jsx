import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Tasks from "../Tasks/tasks";
import './MusicPage.css';
import CardGroup from "react-bootstrap/CardGroup";

const MusicPage = () => {
  return (
    <div>
      <div>Timer</div>

      <CardGroup id="body-card">
        {/* <Card id="task-card"> */}
          <Tasks />
        {/* </Card> */}
        <Card id="now-play-card">Now Playing</Card>
      </CardGroup>
    </div>
  );
};
export default MusicPage;
