import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Formik, Form, ErrorMessage } from 'formik';
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
  margin-bottom: 25px;
  font-family: playfair;
  font-weight: 600;
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 100%;
`;

const SubmitButton = styled(Button)`
  display: block;
  width: 100%;
  font-family: belmont;
  margin: auto;
`;

const StyledErrorMessage = styled(ErrorMessage)`
  font-family: playfair;
  font-weight: 600;
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
            `${Constants.LANDING_API}&Message=${values.customerName}_${values.email}`
          ).then(() => navigate('/thankyou'))
        }
      >
        <Form>
          <FullField
            id="customerName"
            name="customerName"
            placeholder="Full Name"
          ></FullField>
          <StyledErrorMessage name="customerName" />
          <FullField
            id="email"
            name="email"
            placeholder="Email Address"
          ></FullField>
          <StyledErrorMessage name="email" />
          <SubmitButton variant="danger" type="submit">
            free adventure
          </SubmitButton>
        </Form>
      </Formik>
    </div>
  );
}
