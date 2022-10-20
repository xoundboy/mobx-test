import { observer } from 'mobx-react';
import React from 'react';

export const TimerView = observer(({ timer }) => (
  <button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
))
