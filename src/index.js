import './style.css';
import React from "react"
import ReactDOM from "react-dom"
import { Timer } from './Timer';
import { TimerView } from './TimerView';

const myTimer = new Timer()

ReactDOM.render(<TimerView timer={myTimer} />, document.body)

// Update the 'Seconds passed: X' text every second.
setInterval(() => {
  myTimer.increase()
}, 1000)
