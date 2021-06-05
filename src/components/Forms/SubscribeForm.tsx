import React, { ReactElement } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import * as Constants from '../../constants';
import { post } from '../../utils';
import Email from '../FormFields/TextField';
import CheckHuman from '../FormFields/CheckHuman';
import FormFooter from '../FormFields/FormFooter';
import { randomEquationAndAnswer } from '../../utils';
import TextField from '../FormFields/TextField';

interface FormProps {
  close: () => void;
}

interface FormValues {
  email: string;
  test: string;
}

export default function SubscribeForm({ close }: FormProps): ReactElement {
  const [question, answer] = randomEquationAndAnswer();

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
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
        }}
        validationSchema={ValidationSchema}
        onSubmit={async (values: FormValues) =>
          post(`${Constants.SUBSCRIBE_API}&Message=${values.email}`).then(close)
        }
      >
        <Form>
          <TextField
            name="email"
            placeholder="Email Address"
            minWidth="40vw"
          />
          <CheckHuman question={question} />
          <FormFooter close={close} />
        </Form>
      </Formik>
    </div>
  );
}
