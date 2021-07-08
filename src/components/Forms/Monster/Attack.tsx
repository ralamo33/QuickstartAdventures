import styled from 'styled-components';
import TextField from '../../FormFields/TextField';
import React, { ReactElement } from 'react';
import { FormikStepper, FormikStep } from '../FormUtils';
import { object } from 'yup';
import { Col, Row, Container } from 'react-bootstrap';
import * as Constants from '../../../constants';
import { Field } from 'formik';
import { SliderField } from '../../FormFields/SliderField';

interface Props {
	label: string;
}

const validationSchema1 = object().shape({
  name: Constants.STRING_VALIDATION,
  summary: Constants.STRING_VALIDATION,
  description: Constants.STRING_VALIDATION,
});

const Subtitle = styled.p`
  font-family: belmont;
  font-size: 2.5rem;
  text-align: center;
  // color: ${Constants.BLUE};
  color: orangered;
`;

export function Attack(props: Props): ReactElement {
	return <FormikStep label="Attack" validationSchema={validationSchema1}>

            <Subtitle>Attack</Subtitle>
            <Container>
		<Row>
		   <Col xs="12" sm="6">
		   	<TextField label="Average Attack" name="Attack" as="input" />
		   </Col>
		   <Col xs="12" sm ="6"><TextField label="Damage Dice" name="Dice" as="input" /></Col>
		   <Col xs="12" sm ="6" md="3"><TextField label="Armor" name="Armor" as="input" /></Col>
		   <Col xs="12" sm ="6" md="3"><TextField label="Health" name="Health" as="input" /></Col>
		   <Col xs="12" sm ="6" md="3"><TextField label="Speed" name="Speed" as="input" /></Col>
		   <Col xs="12" sm ="6" md="3"><TextField label="Actions" name="Actions" as="input" /></Col>
		</Row>
		<Row>
		  <Col>
	            <SliderField name="str" min={-2} max={12} label="Strength"/>
	            <SliderField name="dex" min={-2} max={12} label="Dexterity"/>
	            <SliderField name="int" min={-2} max={12} label="Intelligence"/>
	            <SliderField name="wis" min={-2} max={12} label="Wisdom"/>
	            <SliderField name="cha" min={-2} max={12} label="Charisma"/>
		  </Col>
		</Row>
           </Container>
          </FormikStep>
}