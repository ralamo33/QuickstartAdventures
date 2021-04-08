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

// This does not work not even a little.
// This may be impossible or I may need to be more clever.
const StyledTimer = styled(CountdownCircleTimer)`
  height: 2000px;
  width: 20px;
  background-color: pink;
  background: pink;
  color: pink;
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
          <StyledTimer
            {...timerProps}
            colors={'#999999'}
            duration={daysDuration}
            initialRemainingTime={remainingTime}
          >
            {(elapsedTime) => {
              const time = elapsedTime.elapsedTime ?? 0;
              return renderTime('days', getTimeDays(daysDuration - time));
            }}
          </StyledTimer>
        </Col>
        <Col sm="3" xs="6">
          <StyledTimer
            {...timerProps}
            colors={Constants.BLUE}
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
          </StyledTimer>
        </Col>
        <Col sm="3" xs="6">
          <CountdownCircleTimer
            {...timerProps}
            colors={Constants.RED}
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
            colors={Constants.YELLOW}
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
