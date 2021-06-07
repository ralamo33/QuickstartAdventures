import React, { ReactElement, useState } from 'react';
import * as Constants from '../../constants';
import styled, { keyframes, Keyframes } from 'styled-components';
import { shake, tada } from 'react-animations';
import { ErrorMessage, Field } from 'formik';
import { Row, Col } from 'react-bootstrap';

interface Props {
  name: string,
  label?: string,
  minWidth?: string,
  placeholder?: string
  fontSize?: string; 
  borderColor: string;
  borderWidth: string;
  animation?: Keyframes;
  animationPlay?: string;
  animationBorderColor?: string
}

    const MyLabel = styled.p`
    font-size: 20px;
    display: block;
  `;

  const FullField = styled(Field)`
  && {
    display: block;
    border-radius: 5px;
    min-width: ${(props: Props) => props.minWidth};
    border: ${(props: Props) => props.borderWidth} solid ${(props: Props) => props.borderColor};
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
    display: block;
    margin: auto;
    text-align: center;
  `

export default function TextField({label, minWidth, name, placeholder, fontSize, borderColor, borderWidth}: Props): ReactElement {

  return (
    <div>
      <MyLabel>{label}</MyLabel>
      <Row>
        <Col>
          <FullField id={name} name={name} placeholder={placeholder} minWidth={minWidth} fontSize={fontSize} 
          borderColor={borderColor} borderWidth={borderWidth} />
          <ErrorMessage name={name} render={(msg) => <StyledError>{msg}</StyledError>}></ErrorMessage>
        </Col>
      </Row>
    </div>
  );
}
