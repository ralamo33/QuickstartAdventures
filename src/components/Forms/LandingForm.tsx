import React, { ReactElement } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import * as Constants from '../../constants';
import { post } from '../../utils';
import { navigate } from 'gatsby';
import PrettyButton from '../Buttons/PrettyButton'
import TextField from '../FormFields/TextField';

interface FormValues {
  customerName: string;
  email: string;
}

export default function LandingForm(): ReactElement {
  const ValidationSchema = Yup.object().shape({
    customerName: Constants.STRING_VALIDATION,
    email: Constants.STRING_VALIDATION.email('Invalid email'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          customerName: '',
          email: '',
        }}
        validationSchema={ValidationSchema}
        onSubmit={async (values: FormValues) =>
          post(
            `${Constants.LANDING_API}&Message=${values.customerName}_${values.email}`
          ).then(() => navigate('/thankyou'))
        }
      >
        <Form>
          <TextField
            name="customerName"
            placeholder="Full Name"
            minWidth="30vw"
            fontSize="1.6rem"
            border="2.2px solid #ffcc00"
          />
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
