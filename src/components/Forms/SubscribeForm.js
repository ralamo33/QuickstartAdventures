/* eslint-disable react/prop-types */
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import * as Constants from '../../constants';
import Email from '../FormFields/Email';
import CheckHuman from '../FormFields/CheckHuman';
import FormFooter from '../FormFields/FormFooter';
import { randomEquationAndAnswer } from '../../utils';

export default function ContestForm({ close }) {
  const [question, answer] = randomEquationAndAnswer();

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    test: Yup.number('Invalid').min(answer, 'Incorrect').max(answer, 'Incorrect').required('You must pass the test'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          test: '',
        }}
        validationSchema={ValidationSchema}
        onSubmit={async (values) => {
          const apiUrl = `${Constants.SUBSCRIBE_API}&Message=${values.email}`;
          axios.post(
            apiUrl, {}, {
              headers: { 'x-api-key': Constants.SUBSCRIBE_API_KEY },
            },
          ).catch((error) => alert(error))
            .then(close);
        }}
      >
        <Form>
          <Email />
          <CheckHuman question={question} />
          <FormFooter close={close} />
        </Form>
      </Formik>
    </div>
  );
}
