import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Container, Row, Col } from 'react-bootstrap';
import Break from './Break';
import * as Constants from '../constants';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const countdownColors = [['#00b3b3', 0.5], [Constants.PURPLE, 0.5], ['#e60000']];

const timerProps = {
  isPlaying: true,
  size: 140,
  strokeWidth: 6,
};

const TimeText = styled.p`
  font-size: 3rem;
  text-align: center;
`;

const DimensionText = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

const renderTime = (dimension: string, time: number) => {
  return (
    <div>
      <TimeText>{time}</TimeText>
      <DimensionText>{dimension}</DimensionText>
    </div>
  );
};

const getTimeSeconds = (time: number) => Math.floor(minuteSeconds - time);
const getTimeMinutes = (time: number) =>
  Math.floor((time % hourSeconds) / minuteSeconds);
const getTimeHours = (time: number) =>
  Math.floor((time % daySeconds) / hourSeconds);
const getTimeDays = (time: number) => Math.floor(time / daySeconds);

export default function Counter(): JSX.Element {
  const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = Date.UTC(2021, 4, 10, 4) / 1000;

  const remainingTime = endTime - startTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <Container>
      <Row>
        <Col sm="3" xs="6">
          <CountdownCircleTimer
            {...timerProps}
            // colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
            colors={countdownColors}
            duration={daysDuration}
            initialRemainingTime={remainingTime}
          >
            {(elapsedTime) => {
              const time = elapsedTime.elapsedTime ?? 0;
              return renderTime('days', getTimeDays(daysDuration - time));
            }}
          </CountdownCircleTimer>
        </Col>
        <Col sm="3" xs="6">
          <CountdownCircleTimer
            {...timerProps}
            // colors={Constants.BLUE}
            colors={countdownColors}
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
        </Col>
        <Col sm="3" xs="6">
          <CountdownCircleTimer
            {...timerProps}
            // colors={Constants.RED}
            colors={countdownColors}
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
        </Col>
        <Col sm="3" xs="6">
          <CountdownCircleTimer
            {...timerProps}
            // colors={[[Constants.BLUE, 0.5], [Constants.RED, 0.5]]}
            // colors={[['#b300b3', 1], ['#4d004d']]}
            // colors={[['#00b3b3', 0.5], ['#b300b3', 0.5], ['#e60000']]}
            colors={countdownColors}
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
        </Col>
      </Row>
    </Container>
  );
}
