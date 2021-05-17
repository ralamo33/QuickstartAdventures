import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import * as Constants from '../../constants';
import { post } from '../../utils';
import { Button } from 'react-bootstrap';
import Email from '../FormFields/Email';
import CheckHuman from '../FormFields/CheckHuman';
import FormFooter from '../FormFields/FormFooter';
import { randomEquationAndAnswer } from '../../utils';
import { ErrorMessage, Field } from 'formik';

interface FormValues {
  email: string;
  test: string;
}

const FullField = styled(Field)`
  margin-bottom: 25px;
  width: 100%;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  font-family: belmont;
`;

export default function LandingForm(): ReactElement {

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    name: Yup.string().required('Your name is required.'),
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
          post(`${Constants.FREE_API}&Message=${values.email}`).then(close)
        }
      >
        <Form>
          <FullField id="customerName" name="customerName" placeholder="Full Name"></FullField>
          <FullField id="email" name="email" placeholder="Email Address"></FullField>
          <SubmitButton type="submit">free adventure</SubmitButton>
        </Form>
      </Formik>
    </div>
  );
}
