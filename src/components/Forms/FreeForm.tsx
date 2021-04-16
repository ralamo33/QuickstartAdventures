import React, { ReactElement } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import * as Constants from '../../constants';
import Email from '../FormFields/Email';
import CheckHuman from '../FormFields/CheckHuman';
import FormFooter from '../FormFields/FormFooter';
import { randomEquationAndAnswer } from '../../utils';
import NewName from '../FormFields/NewName';

interface FormProps {
  close: () => void;
}

export default function FreeForm({ close }: FormProps): ReactElement {
  const [question, answer] = randomEquationAndAnswer();

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    newName: Yup.string().required('Required'),
    test: Yup.number()
      .min(answer, 'Incorrect')
      .max(answer, 'Incorrect')
      .required('You must pass the test'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          test: '',
          newName: '',
        }}
        validationSchema={ValidationSchema}
        onSubmit={async (values) => {
          const apiUrl = `${Constants.FREE_API}&Message=${values.email}_${values.newName}`;
          axios
            .post(
              apiUrl,
              {},
              {
                headers: { 'x-api-key': Constants.FREE_API_KEY },
              }
            )
            .catch((error) => alert(error))
            .then(close);
        }}
      >
        <Form>
          <NewName />
          <Email />
          <CheckHuman question={question} />
          <FormFooter close={close} />
        </Form>
      </Formik>
    </div>
  );
}
