import { Box, Card, CardContent } from '@material-ui/core';
import { Field } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import React, { ReactElement } from 'react';
import { FormikStepper, FormikStep } from '../../Forms/FormUtils';
import { mixed, number, object } from 'yup';
import MonsterName from '../MonsterForm/MonsterName';

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));

export default function Tutorial(): ReactElement {
  return (
    <Card>
      <CardContent>
        <FormikStepper
          initialValues={{
            name: '',
            summary: '',
            description: '',
          }}
          onSubmit={async (values) => {
            await sleep(3000);
            console.log('values', values);
          }}
        >
          <FormikStep label="Personal Data">
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="name"
                component={TextField}
                label="This is the first form"
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="summary"
                component={TextField}
                label="Monster Summary"
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="description"
                component={TextField}
                label="Monster Summary"
              />
            </Box>
          </FormikStep>
          <FormikStep
            label="Bank Accounts"
            validationSchema={object({
              money: mixed().when('millionaire', {
                is: true,
                then: number()
                  .required()
                  .min(
                    1_000_000,
                    'Because you said you are a millionaire you need to have 1 million'
                  ),
                otherwise: number().required(),
              }),
            })}
          >
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="money"
                type="number"
                component={TextField}
                label="All the money I have"
              />
            </Box>
          </FormikStep>
          <MonsterName></MonsterName>
        </FormikStepper>
      </CardContent>
    </Card>
  );
}
