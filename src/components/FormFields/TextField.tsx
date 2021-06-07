import React, { ReactElement, useState } from 'react';
import * as Constants from '../../constants';
import styled, { keyframes, Keyframes } from 'styled-components';
import { shake, tada } from 'react-animations';
import { ErrorMessage, Field } from 'formik';
import { Row, Col } from 'react-bootstrap';

interface Props {
  name: string,
  error: boolean;
  label?: string,
  minWidth?: string,
  placeholder?: string
  fontSize?: string; 
  borderColor?: string;
  animation?: Keyframes;
  animationPlay?: string;
  animationBorderColor?: string
}

interface ErrorProps {
  error: boolean;
}

  // const [borderColor, setBorderColor] = useState(Constants.BLUE);
  // const [outlineColor, setOutlineColor] = useState(Constants.OLD_BLUE);

  // const activateError = () => {
  //   setBorderColor(Constants.RED);
  //   setOutlineColor('red');
  // }

  const MyLabel = styled.p`
    font-size: 20px;
    display: block;
  `;

  const getBorderColor = (error: boolean) => {
    // return error ? 'red' : Constants.BLUE;
    return error ? Constants.BLUE : 'red';
  }

  const FullField = styled(Field)`
  && {
    display: block;
    border-radius: 5px;
    min-width: ${(props: Props) => props.minWidth};
    // border: 2.2px solid ${(props: Props) => getBorderColor(props.error)};
    border: 2.2px solid ${(props: Props) => props.borderColor};
    font-size: ${(props: Props) => props.fontSize}; 
    justify-content: center;
    margin: auto;
    margin-bottom: 15px;
    animation: 1s ${(props: Props) => props.animation};
    animation-play-state: ${(props: Props) => props.animationPlay};
  }

  &:active {
    outline: 2px solid ${Constants.OLD_BLUE};
  }

  &:focus {
    outline: 2px solid ${Constants.OLD_BLUE};
  }
  `;

  const StyledError = styled.p`
    color: red;
    font-family: newsreader;
    margin: 0px;
    padding: 0px;
    font-weight: 600;
    margin: auto;
    display: block;
  `

  const shakeAnimation = keyframes`${shake}`;
  const tadaAnimation = keyframes`${tada}`;

  // const SuccessAnimation = styled.div`
  //   animation: 1s ${shakeAnimation};
  //   animation-play-state: ${(props: Props) => props.success};
  // `;

  const ErrorAnimation = styled.div`
    animation: 1s ${shakeAnimation};
    animation-play-state: ${(props: ErrorProps) => props.error ? 'start': 'paused'}; 
    `;


export default function TextField({label, minWidth, name, placeholder, fontSize, error}: Props): ReactElement {

  return (
    <div>
      <MyLabel>{label}</MyLabel>
      <Row>
        <Col>
          <ErrorAnimation error={error}>
          <FullField id={name} name={name} placeholder={placeholder} minWidth={minWidth} fontSize={fontSize} />
          </ErrorAnimation>
        </Col>
      </Row>
    </div>
  );
}
