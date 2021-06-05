import React, { ReactElement } from 'react';
import * as Constants from '../../constants';
import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';
import { Row, Col } from 'react-bootstrap';

interface Props {
  name: string,
  label?: string,
  minWidth?: string,
  placeholder?: string
  fontSize?: string; 
  border?: string;
}

  const MyLabel = styled.p`
    font-size: 20px;
    display: block;
  `;

  const FullField = styled(Field)`
  && {
    display: block;
    margin-bottom: 25px;
    border-radius: 5px;
    min-width: ${(props: Props) => props.minWidth};
    // border: ${(props: Props) => props.border};
    border: 2.2px solid ${Constants.BLUE};
    font-size: ${(props: Props) => props.fontSize}; 
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
  `

export default function TextField({label, minWidth, name, placeholder, fontSize}: Props): ReactElement {

  return (
    <div>
      <MyLabel>{label}</MyLabel>
      <Row>
        <Col>
          <FullField id={name} name={name} placeholder={placeholder} minWidth={minWidth} fontSize={fontSize} />
          <ErrorMessage name={name} render={(msg: string) => <StyledError>{msg}</StyledError>}/>
        </Col>
      </Row>
    </div>
  );
}
