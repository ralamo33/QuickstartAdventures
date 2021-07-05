import { Card, CardContent } from '@material-ui/core';
import styled from 'styled-components';
import TextField from '../../FormFields/TextField';
import React, { ReactElement } from 'react';
import { FormikStepper, FormikStep } from '../FormUtils';
import { object } from 'yup';
import { Col, Row, Container } from 'react-bootstrap';
import * as Constants from '../../../constants';
import { string } from 'yup/lib/locale';

interface Props {
  label: string;
}

const validationSchema1 = object().shape({
  //   name: Constants.STRING_VALIDATION,
  //   summary: Constants.STRING_VALIDATION,
  //   description: Constants.STRING_VALIDATION,
});

const Subtitle = styled.p`
  font-family: belmont;
  font-size: 2.5rem;
  text-align: center;
  // color: ${Constants.BLUE};
  color: orangered;
`;

export function Skill(props: Props): ReactElement {
  return (
    <FormikStep label="Skills" validationSchema={validationSchema1}>
      <Subtitle>Special Skills</Subtitle>
      <Container>
        <Row>
          <Col>
            <TextField name="notes" label="Special Notes" as="textarea" />
          </Col>
        </Row>
      </Container>
    </FormikStep>
  );
}
