import React, { useState, useRef } from "react";
import "./Home.css";
import Counter from "../Counter";
import Timer from "../Timer";
import About from "../About/About";
import { Card, CardGroup } from "react-bootstrap";
import Youtube from "../video/Youtube";

function Home() {
  const [sessionLengthCounter, setSessionLengthCounter] = useState(25);

  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const timerRef = useRef();

  const increaseSessionLengthCounter = () => {
    if (sessionLengthCounter < 60) {
      setSessionLengthCounter(sessionLengthCounter + 1);
      setTimeout(() => timerRef.current.restartTimer(), 5);
    }
  };

  const decreaseSessionLengthCounter = () => {
    if (sessionLengthCounter > 1) {
      setSessionLengthCounter(sessionLengthCounter - 1);
      setTimeout(() => timerRef.current.restartTimer(), 5);
    }
  };

  return (
    <div>
    <div>
    <About/>
    </div>
    <br/>
    <CardGroup id="home-card-group">
    <Card>
      <Youtube/>
    </Card>
    <Card>
    {/* <div id="home-container">
      <div id="clock-container"> */}
        <Counter
          labelId="session-label"
          counterId="session-length"
          counterLabel="Set Minutes"
          counter={sessionLengthCounter}
          increaseCounter={increaseSessionLengthCounter}
          decreaseCounter={decreaseSessionLengthCounter}
          incrementBtnId="session-increment"
          decrementBtnId="session-decrement"
          timerIsRunning={timerIsRunning}
        />
     
      
        <Timer
          sessionTime={sessionLengthCounter}
          passRunning={setTimerIsRunning}
          setSessionLength={setSessionLengthCounter}
          ref={timerRef}
        />
      
      {/* </div>
    </div> */}
    </Card>

    </CardGroup>
    </div>
  );
}

export default Home;
