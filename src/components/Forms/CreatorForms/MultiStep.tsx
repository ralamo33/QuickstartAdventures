import React, { ReactElement } from 'react';
import {} from 'formik-material-ui';
import { Card, CardContent } from '@material-ui/core';
import { Field, Formik, Form } from 'formik';
import { TextField, CheckboxWithLabel } from 'formik-material-ui';
import * as Yup from 'yup';
import * as Constants from '../../../constants';
import { Button } from 'react-bootstrap';

export default function MultiStep(): ReactElement {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        millionaire: false,
        money: 0,
        description: '',
      }}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onSubmit={() => {}}
    >
      <Form>
        <Field
          name="First name"
          component={TextField}
          label="First name"
        ></Field>
        <Field name="Last name" component={TextField} label="Last name"></Field>
        <Field
          name="Millionaire"
          component={CheckboxWithLabel}
          label="Are you a millionaire?"
        ></Field>
      </Form>
    </Formik>
  );
}
