import React, { ReactElement, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Formik, Form, FormikState } from 'formik';
import { useQueryParam, StringParam } from 'use-query-params';
import * as Yup from 'yup';
import * as Constants from '../../constants';
import { post } from '../../utils';
import PrettyButton from '../PrettyButton';
import TextField from '../FormFields/TextField';
import * as Animations from 'react-animations';

interface FormValues {
  email: string;
}

const pulseAnimation = keyframes`${Animations.pulse}`;

const Animation = styled.div`
  animation: 1.5s ${pulseAnimation};
  animation-play-state: play;
	animation-iteration-count: infinite;
`;

export default function FreeForm(): ReactElement {
  const startBorder = `2.2px solid #00e64d`;
  // const startBorder = `2.2px solid orange`;
  const startPlacedholder = 'Email Address';
  const updatedBorder = '5px solid #66ff66';
  // const updatedBorder = '5px solid orange';
  const updatedPlacedholder = 'Success!';

  const [border, setBorder] = useState(startBorder);
  const [play, setPlay] = useState('paused');
  const [placeholder, setPlaceholder] = useState(startPlacedholder);

  const ValidationSchema = Yup.object().shape({
    email: Constants.STRING_VALIDATION.email('Invalid email'),
  });

  const updateEmailField = () => {
    setPlaceholder(updatedPlacedholder);
    setBorder(updatedBorder);
    setPlay('start');
  };

  const current = new Date();
  const param = useQueryParam('crs', StringParam)[0] || 'default';
  const date = current.toLocaleDateString();
  const time = current.toLocaleTimeString();

  const onSubmit = (
    values: FormValues,
    resetForm: (nextState?: Partial<FormikState<any>>) => void
  ) => {
    post(
      `${Constants.LANDING_API}&Message=${param}_${values.email}_${date}_${time}`
    )
      .then(updateEmailField)
      .then(() => resetForm({}));
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
      >
        <Form>
          <Animation animPlay={play}>
            <TextField
              name="email"
              placeholder={placeholder}
              minwidth="25vw"
              maxwidth="80%"
              border={border}
              fontSize="2.2rem"
              as="input"
            />
          </Animation>
          <PrettyButton
            variant="warning"
            type="submit"
            fontSize="2.2rem"
            color="white"
            backgroundcolor="#800000"
            bordercolor="#800000"
            hovercolor="#e60000"
            text={Constants.FREE_BUTTON_TEXT}
          />
        </Form>
      </Formik>
    </div>
  );
}
