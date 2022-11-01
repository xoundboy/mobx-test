import './style.css';
import React from "react"
import ReactDOM from "react-dom/client"
import { Timer } from './Timer';
import { TimerView } from './TimerView';

const myTimer = new Timer()
const rootElement = document.createElement('div');
document.body.appendChild(rootElement);
const root = ReactDOM.createRoot(rootElement);
root.render(<TimerView timer={myTimer} />)

setInterval(() => {
  myTimer.increase()
}, 1000)

