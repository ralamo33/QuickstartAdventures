import React from 'react';
import {Formik, Form } from 'formik';
import {Button, Row, Col} from 'react-bootstrap';
import * as Yup from 'yup';
import Break from "../components/Break";
import axios from "axios";
import Email from "./FormFields/Email";
import CheckHuman from "./FormFields/CheckHuman";
import FormFooter from "./FormFields/FormFooter";


export default function MyForm(props) {

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
                axios.post(
                  props.apiUrlFunction(values.email), {}, {
                    headers: {"x-api-key": props.apiKey}
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