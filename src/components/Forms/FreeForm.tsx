import React, { ReactElement, useState } from 'react';
import styled, {Keyframes, keyframes} from 'styled-components';
import { Formik, Form, FormikErrors, FormikTouched } from 'formik';
import * as Yup from 'yup';
import * as Constants from '../../constants';
import { post } from '../../utils';
import PrettyButton from '../Buttons/PrettyButton';
import TextField from '../FormFields/TextField';
import { shake, tada } from 'react-animations';


interface FormValues {
  email: string;
}

interface AnimationProps {
  animation: Keyframes;
  play: string;
  borderColor: string;
}

const border = `2.2px solid ${Constants.BLUE};`

const PrettyText = styled.p`
  font-size: 1.5rem;
  text-align: center;
  max-width: 30vw;
  display: block;
  margin: 10px auto;
`;

const Animation = styled.div`
  animation: 1s ${(props: AnimationProps) => props.animation};
  animation-play-state: ${(props: AnimationProps) => props.play};
  border-color: ${(props: AnimationProps) => props.borderColor};
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

  const [hidden, setHidden] = useState(false);
  const [text, setText] = useState('');

  const ValidationSchema = Yup.object().shape({
    email: Constants.STRING_VALIDATION.email('Invalid email'),
  });

  const getBorderColor = (touched: boolean, error: boolean) => {
    return (touched && error) ? 'red' : Constants.BLUE;
  }

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={ValidationSchema}
        onSubmit={async (values: FormValues) =>
          post(
            `${Constants.LANDING_API}&Message=John Doe_${values.email}`
          ).then()
        }
      >
        {(errors: FormikErrors<string>, touched: FormikTouched<string>) => (
          <Form>
              <TextField
                name="email"
                placeholder="Email Address"
                minWidth="30vw"
                borderColor={getBorderColor(errors.email, touched.email)}
                error={(errors.email && touched.email) || false}
              />
            <PrettyButton
              variant="warning"
              fontSize="30px"
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
