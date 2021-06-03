import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import * as Constants from '../../constants';
import { post } from '../../utils';
import { Button } from 'react-bootstrap';
import { Field } from 'formik';
import { navigate } from 'gatsby';

interface FormValues {
  email: string;
  customerName: string;
}

const FullField = styled(Field)`
  && {
    margin-bottom: 25px;
    font-weight: 600;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 100%;
    font-size: 1.2rem;
    border: 2.2px solid ${Constants.BLUE};
    border-radius: 5px;
  }

  &:focus {
    border: 2.2px solid ${Constants.YELLOW};
    outline: solid 0;
  }
`;

const SubmitButton = styled(Button)`
  && {
    display: block;
    width: 100%;
    font-family: belmont;
    margin: auto;
    background-color: ${Constants.RED};
    border-color: ${Constants.RED};
    font-size: 1.3rem;
  }

  &:hover {
    background-color: #cc0000;
    border-color: #cc0000;
  }
`;

export default function LandingForm(): ReactElement {
  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    customerName: Yup.string().required('Your name is required.'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          customerName: '',
        }}
        validationSchema={ValidationSchema}
        onSubmit={async (values: FormValues) =>
          post(
            `${Constants.LANDING_API}&Message=kjljdf_${values.email}`
          ).then(() => navigate('/thankyou'))
        }
      >
        <Form>
          <FullField
            id="email"
            name="email"
            placeholder="Email Address"
          ></FullField>
          <SubmitButton variant="danger" type="submit">
            free adventure
          </SubmitButton>
        </Form>
      </Formik>
    </div>
  );
}
