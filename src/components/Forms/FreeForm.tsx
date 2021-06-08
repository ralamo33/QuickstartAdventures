import React, { ReactElement, useState } from 'react';
import styled, {Keyframes, keyframes} from 'styled-components';
import { Formik, Form, FormikErrors, FormikTouched, FormikState } from 'formik';
import * as Yup from 'yup';
import * as Constants from '../../constants';
import { post } from '../../utils';
import PrettyButton from '../Buttons/PrettyButton';
import TextField from '../FormFields/TextField';
import * as Animations from 'react-animations';


interface FormValues {
  email: string;
}

const border = `2.2px solid ${Constants.BLUE};`

const PrettyText = styled.p`
  font-size: 1.5rem;
  text-align: center;
  max-width: 30vw;
  display: block;
  margin: 10px auto;
`;

interface AnimationProps {
  animPlay: string;
}

const pulseAnimation = keyframes`${Animations.pulse}`;
const fadeAnimation = keyframes`${Animations.fadeIn}`;

const Animation = styled.div`
  animation: 1s ${pulseAnimation};
  animation-play-state: ${(props: AnimationProps) => props.animPlay};
`;

const ErrorText = styled(PrettyText)`
  color: white;
  background: red;
`;

const SuccessText = styled(PrettyText)`
  color: white;
  background: ${Constants.BLUE};
`;

export default function FreeForm(): ReactElement {

  const startBorderColor = Constants.BLUE;
  const startBorderWidth = '2.2px';
  const startPlacedholder = 'Email Address';
  const updatedBorderColor = '#66ff66'
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
  }

  const onSubmit = (values: FormValues, resetForm:(nextState?: Partial<FormikState<any>>) => void) => {
    post(
      `${Constants.LANDING_API}&Message=John Doe_${values.email}`
    ).then(updateEmailField).then(() => resetForm({}))
  }


  return (
    <div>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values, {resetForm}) => onSubmit(values, resetForm)}
      >
        {(errors: FormikErrors<string>, touched: FormikTouched<string>) => (
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
        )}
      </Formik>
    </div>
  );
}
