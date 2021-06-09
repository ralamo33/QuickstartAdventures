import React, { MouseEventHandler, ReactElement, useState } from 'react';
import {} from 'formik-material-ui';
import { Card, CardContent } from '@material-ui/core';
import {
  Field,
  Formik,
  Form,
  FormikConfig,
  FormikValues,
  FormikHelpers,
} from 'formik';
import { TextField, CheckboxWithLabel } from 'formik-material-ui';
import { object, mixed, number } from 'yup';
import { Button } from 'react-bootstrap';
import * as Constants from '../../../constants';

const moneyValidation = object({
  money: mixed().when('millionaire', {
    is: true,
    then: number().required('You said you had a million').min(1_000_000),
    otherwise: number().required(),
  }),
});

export default function MultiStep(): ReactElement {
  return (
    <FormikStepper
      initialValues={{
        firstName: '',
        lastName: '',
        millionaire: false,
        money: 0,
        description: '',
      }}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onSubmit={() => alert('Form submitted')}
    >
      <FormikStep>
        <Field
          name="firstName"
          component={TextField}
          label="First name"
        ></Field>
        <Field name="lastName" component={TextField} label="Last name"></Field>
        <Field
          name="millionaire"
          type="checkbox"
          component={CheckboxWithLabel}
          Label={{ label: 'Are you a millionaire?' }}
        ></Field>
      </FormikStep>
      <FormikStep>
        <Field
          name="money"
          type="number"
          component={TextField}
          label="Money"
        ></Field>
      </FormikStep>
      <FormikStep>
        <Field
          name="description"
          component={TextField}
          label="Description"
        ></Field>
      </FormikStep>
    </FormikStepper>
  );
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {}

export function FormikStep({ children }: FormikStepProps): ReactElement {
  return <div>{children}</div>;
}

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>): ReactElement {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<
    FormikStepProps
  >[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];

  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

  const onNext = async (
    values: FormikValues,
    helpers: FormikHelpers<FormikValues>
  ) => {
    if (isLastStep()) {
      console.log('end');
      await props.onSubmit(values, helpers);
    } else {
      console.log('next');
      setStep(step + 1);
    }
  };

  return (
    <Formik {...props} onSubmit={() => alert('submit')}>
      <div>
        <Button variant="primary" type="submit">Next</Button>
        <Form
          onSubmit={() => {
            'Form submit';
          }}
        >
          {' '}
          {currentChild}{' '}
        </Form>
        {step > 0 ? (
          <Button onClick={() => setStep(step - 1)}>Previous</Button>
        ) : null}
      </div>
    </Formik>
  );
}
