import React from 'react';
import {Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import * as Constants from "../../constants";
import Break from "../Break";
import Email from "../FormFields/Email";
import CheckHuman from "../FormFields/CheckHuman";
import FormFooter from "../FormFields/FormFooter";


export default function PlaytestForm(props) {

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    test: Yup.number('Invalid').min(4, 'Incorrect').max(4, 'Incorrect').required('You must pass the test'),
  });
  
  return  <div>
            <Formik
              initialValues={{
                email: '',
                test: '',
              }}
              validationSchema={ValidationSchema}
              onSubmit={async (values) => {
                const apiUrl = Constants.PLAYTEST_API + "&Message=" + values.email;
                axios.post(
                  apiUrl, {}, {
                    headers: {"x-api-key": Constants.PLAYTEST_API_KEY}
                  }
                ).catch((error) => alert(error))
                .then(props.close);
              }
            }
            >
            <Form>
              <Email/>
              <Break height="3"/>
              <CheckHuman/>
              <FormFooter close={props.close}/>
            </Form>
            </Formik>
          </div>
};