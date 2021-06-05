import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import * as Constants from '../../constants';
import { post } from '../../utils';
import { Button } from 'react-bootstrap';
import { Field } from 'formik';
import { navigate } from 'gatsby';
import PrettyButton from '../Buttons/PrettyButton'
import TextField from '../FormFields/TextField';

interface FormValues {
  email: string;
}

export default function LandingForm(): ReactElement {
  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={ValidationSchema}
        onSubmit={async (values: FormValues) =>
          post(
            `${Constants.LANDING_API}&Message=JohnDoe_${values.email}`
          ).then(() => navigate('/thankyou'))
        }
      >
        <Form>
          <TextField
            name="email"
            placeholder="Email Address"
            minWidth="30vw"
            fontSize="1.6rem"
            border="2.2px solid #ffcc00"
          />
          <PrettyButton variant="danager" fontSize="1.8rem" fontfamily="belmont" type="submit"
          backgroundcolor={`${Constants.RED}`} bordercolor={`${Constants.RED}`}
          color="white" hovercolor="#cc0000" text="Free Adventure" />
        </Form>
      </Formik>
    </div>
  );
}
