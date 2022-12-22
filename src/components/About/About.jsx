import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import "./About.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <Card id="about-card">
        <Card.Header id="about-header">What is Focus Flow? </Card.Header>
        <Card.Body>
            <p id="about-p">
                Focus Flow uses the Pomodoro Technique, a time management technique used to break
                work into manageable intervals, alongside Lofi Music to help you relax and focus 
                while you work! <br/>
                You can set your timer directly here on the Home Page and use the provided Lofi Music
                from YouTube, or you can click below for more options.
            </p>
            <div id="about-btn-div">
            <Button onClick={()=> navigate("/multivideos")} id="custom-btn">Click Here to Customize</Button>
            </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default About;
