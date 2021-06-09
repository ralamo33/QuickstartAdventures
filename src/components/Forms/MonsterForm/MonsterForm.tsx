import { Card, CardContent } from '@material-ui/core';
import styled from 'styled-components';
import TextField from '../../FormFields/TextField';
import React, { ReactElement } from 'react';
import { FormikStepper, FormikStep } from '../../Forms/FormUtils';
import { mixed, number, object } from 'yup';
import MonsterName from '../MonsterForm/MonsterName';
import { Col, Row, Container } from 'react-bootstrap';
import * as Constants from '../../../constants';
import { string } from 'yup/lib/locale';

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));

const Subtitle = styled.p`
  font-family: belmont;
  font-size: 2.5rem;
  text-align: center;
  // color: ${Constants.BLUE};
  color: orangered;
`;

const validationSchema1 = object().shape({
  name: Constants.STRING_VALIDATION,
  summary: Constants.STRING_VALIDATION,
  language: Constants.STRING_VALIDATION,
  description: Constants.STRING_VALIDATION,
});

export default function Stepper(): ReactElement {
  return (
    <Card>
      <CardContent>
        <FormikStepper
          initialValues={{
            name: '',
            summary: '',
            description: '',
          }}
          onSubmit={async (values) => {
            console.log('values', values);
          }}
        >
          <FormikStep label="Flavor" validationSchema={validationSchema1}>
            <Subtitle>Monster Flavor</Subtitle>
            <Container>
              <Row>
                <Col>
                  <TextField name="name" label="Name" as="input" />
                </Col>
                <Col>
                  <TextField name="summary" label="Motivation" as="input" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextField
                    name="description"
                    label="Description"
                    as="textarea"
                  />
                </Col>
              </Row>
            </Container>
          </FormikStep>
          <FormikStep label="rFlavor" validationSchema={validationSchema1}>
            <Subtitle>Monster Flavor</Subtitle>
            <Container>
              <Row>
                <Col>
                  <TextField name="name" label="Name" as="input" />
                </Col>
                <Col>
                  <TextField name="summary" label="Motivation" as="input" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextField
                    name="description"
                    label="Description"
                    as="textarea"
                  />
                </Col>
              </Row>
            </Container>
          </FormikStep>
          <FormikStep
            label="Bank Accounts"
            // validationSchema={object({
            //   appearance: require('Required'),
            // })}
            // money: mixed().when('millionaire', {
            //   is: true,
            //   then: number()
            //     .required()
            //     .min(
            //       1_000_000,
            //       'Because you said you are a millionaire you need to have 1 million'
            //     ),
            //   otherwise: number().required(),
            // }),
            // })}
          ></FormikStep>
        </FormikStepper>
      </CardContent>
    </Card>
  );
}
