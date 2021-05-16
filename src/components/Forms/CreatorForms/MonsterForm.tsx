import React, { ReactElement } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import * as Constants from '../../../constants';
import TextField from '../../FormFields/TextField';
import { Button } from 'react-bootstrap';

export default function MonsterForm(): ReactElement {
  const success = 'Monster Submitted';

  const ValidationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    description: Yup.string(),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={async (values) => {
        const apiUrl = `${Constants.CREATE_MONSTER_API}&Message=${values.name}_${values.description}`;
        axios
          .post(
            apiUrl,
            {},
            {
              headers: { 'x-api-key': Constants.CREATE_MONSTER_API_KEY },
            }
          )
          .catch((error) => alert(error))
          .then(() => alert(success));
      }}
    >
      <Form>
        <TextField id="name" name="name" placeholder="Monster Name"></TextField>
        <TextField
          id="description"
          name="description"
          placeholder="Monster Description"
        ></TextField>
        <Button variant="primary" type="submit">
          Onwards
        </Button>
      </Form>
    </Formik>
  );
}
