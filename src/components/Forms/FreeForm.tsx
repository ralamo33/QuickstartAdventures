import React, { ReactElement, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Formik, Form, FormikState } from 'formik';
import * as Yup from 'yup';
import * as Constants from '../../constants';
import { post } from '../../utils';
import PrettyButton from '../Buttons/PrettyButton';
import TextField from '../FormFields/TextField';
import * as Animations from 'react-animations';

interface FormValues {
  email: string;
}

interface AnimationProps {
  animPlay: string;
}

const pulseAnimation = keyframes`${Animations.pulse}`;

const Animation = styled.div`
  animation: 1s ${pulseAnimation};
  animation-play-state: ${(props: AnimationProps) => props.animPlay};
`;

export default function FreeForm(): ReactElement {
  const startBorderColor = Constants.BLUE;
  const startBorderWidth = '2.2px';
  const startPlacedholder = 'Email Address';
  const updatedBorderColor = '#66ff66';
  const updatedBorderWidth = '5px';
  const updatedPlacedholder = 'Success!';

  const [borderColor, setBorderColor] = useState(startBorderColor);
  const [borderWidth, setBorderWidth] = useState(startBorderWidth);
  const [play, setPlay] = useState('paused');
  const [placeholder, setPlaceholder] = useState(startPlacedholder);

  const ValidationSchema = Yup.object().shape({
    email: Constants.STRING_VALIDATION.email('Invalid email'),
  });

  const updateEmailField = () => {
    setPlaceholder(updatedPlacedholder);
    setBorderColor(updatedBorderColor);
    setPlay('start');
    setBorderWidth(updatedBorderWidth);
  };

  const onSubmit = (
    values: FormValues,
    resetForm: (nextState?: Partial<FormikState<any>>) => void
  ) => {
    post(`${Constants.LANDING_API}&Message=John Doe_${values.email}`)
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
              minWidth="25vw"
              borderColor={borderColor}
              borderWidth={borderWidth}
              fontSize="1.5rem"
            />
          </Animation>
          <PrettyButton
            variant="warning"
            type="submit"
            fontSize="2rem"
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
