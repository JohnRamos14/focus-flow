import React from "react";
import "./Counter.css";
import { FaAngleDown } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';
import { Card } from "react-bootstrap";



function Counter(props) {
  return (
    <Card>
    <div className="counter-container">
      <h3 id={props.labelId}>{props.counterLabel}</h3>
      <div className="control-panel">
        {!props.timerIsRunning && (
          <button
            id={props.decrementBtnId}
            onClick={() => props.decreaseCounter()}
            aria-label="decrease button"
          >
            <FaAngleDown />
          </button>
        )}
        <p
          id={props.counterId}
          className={
            props.timerIsRunning ? "bigger-when-is-running" : "normal-counter"
          }
        >
          {props.counter}
        </p>
        {!props.timerIsRunning && (
          <button
            id={props.incrementBtnId}
            onClick={() => props.increaseCounter()}
            aria-label="increase button"
          >
            <FaAngleUp />
          </button>
        )}
      </div>
    </div>
    </Card>
  );
}

export default Counter;
