import React, { useState, forwardRef, useImperativeHandle } from "react";
import alarmSrc from "./audio/alarm.mp3";
import { useTimer } from "react-timer-hook";
import "./Timer.css";
import { FaPlay } from 'react-icons/fa';
import { FaPause} from 'react-icons/fa';
import { FaUndoAlt} from 'react-icons/fa';
import { Card } from "react-bootstrap";


function Timer(props, ref) {
  const [sessionCounter, setSessionCounter] = useState(1);
  const [titleLabel, setTitleLabel] = useState("Session");
  const numToMins = (num) => {
    const time = new Date();
    time.setSeconds(60 * num + time.getSeconds());
    return time;
  };

  const alarmSound = document.getElementById("beep");

  const onFinish = () => {
    if (props.sessions === sessionCounter && titleLabel === "Break") {
      alarmSound.play();
      props.passRunning(!isRunning);
    } else if (titleLabel === "Break") {
      alarmSound.play();
      setTitleLabel("Session");
      setSessionCounter(sessionCounter + 1);
      setTimeout(() => restart(numToMins(props.sessionTime)), 1000);
    } else if (titleLabel === "Session") {
      alarmSound.play();
      setTitleLabel("Break");
      setTimeout(() => restart(numToMins(props.breakTime)), 1000);
    }
  };

  const { seconds, minutes, hours, isRunning, resume, pause, restart } =
    useTimer({
      expiryTimestamp: numToMins(props.sessionTime),
      onExpire: () => onFinish(),
      autoStart: false,
    });

  const startPause = () => {
    if (isRunning) {
      pause();
      props.passRunning(!isRunning);
    } else {
      resume();
      props.passRunning(!isRunning);
    }
  };

  useImperativeHandle(
    ref,
    () => ({
      restartTimer() {
        restart(numToMins(props.sessionTime), false);
        setSessionCounter(1);
        setTitleLabel("Session");
      },
    }),
    [restart, props.sessionTime]
  );

  const restartTimer = () => {
    restart(numToMins(props.sessionTime), false);
    setTitleLabel("Session");
    props.setSessionLength(25);
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
  };

  const formatTimer = (timeNum) =>
    timeNum < 10 ? "0" + timeNum.toString() : timeNum;

  return (
    <Card id="timer-card">
    {/* <div id="timer-container"> */}
      <audio id="beep" src={alarmSrc}></audio>
      
      <div
        id="time-left"
        className={minutes === 0 && hours === 0 ? "is-finishing" : "is-running"}
      >
        {hours === 1 ? "60" : formatTimer(minutes)}:{formatTimer(seconds)}
      </div>
      <div id="control-panel">
        <button
          id="start_stop"
          onClick={startPause}
          aria-label="play-pause button"
        >
          {isRunning ? (
            
            <FaPause/>
          ) : (
            <FaPlay/>
          )}
        </button>
        <button id="reset" onClick={restartTimer} aria-label="restart button">
          <FaUndoAlt/>
        </button>
      </div>
    {/* </div> */}
    </Card>
  );
}

export default forwardRef(Timer);
