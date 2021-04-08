import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styled from 'styled-components';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 200,
  strokeWidth: 6,
};

const renderTime = (dimension: string, time: number) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time: number) => Math.floor(minuteSeconds - time);
const getTimeMinutes = (time: number) => Math.floor((time % hourSeconds) / minuteSeconds);
const getTimeHours = (time: number) => Math.floor((time % daySeconds) / hourSeconds);
const getTimeDays = (time: number) => Math.floor(time / daySeconds);

export default function Counter(): JSX.Element {
  const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = Date.UTC(2021, 4, 10, 4) / 1000;

  const remainingTime = endTime - startTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="App">
      <CountdownCircleTimer
        {...timerProps}
        colors={'#218380'}
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {(elapsedTime) => {
          const time = elapsedTime.elapsedTime ?? 0;
          return renderTime('days', getTimeDays(daysDuration - time));
        }}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={'#218380'}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => {
          const repeat = remainingTime - totalElapsedTime > hourSeconds;
          return [repeat, 0];
        }}
      >
        {(elapsedTime) => {
          const time = elapsedTime.elapsedTime ?? 0;
          return renderTime('hours', getTimeHours(daySeconds - time));
        }}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={'#218380'}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => {
          const repeat = remainingTime - totalElapsedTime > minuteSeconds;
          return [repeat, 0];
        }}
      >
        {(elapsedTime) => {
          const time = elapsedTime.elapsedTime ?? 0;
          return renderTime('minutes', getTimeMinutes(hourSeconds - time));
        }}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={'#218380'}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => {
          const repeat = totalElapsedTime < remainingTime;
          return [repeat, 0];
        }}
      >
        {(elapsedTime) => {
          const time = elapsedTime.elapsedTime ?? 0;
          return renderTime('seconds', getTimeSeconds(time));
        }}
      </CountdownCircleTimer>
    </div>
  );
}
