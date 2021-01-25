import React from 'react';
import {Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import * as Constants from "../../constants";
import Break from "../Break";
import Email from "../FormFields/Email";
import CheckHuman from "../FormFields/CheckHuman";
import FormFooter from "../FormFields/FormFooter";
import {randomEquationAndAnswer} from "../../utils";


export default function ContestForm(props) {

  const questionAndAnswer = randomEquationAndAnswer();
  const question = questionAndAnswer[0];
  const answer = questionAndAnswer[1];

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    test: Yup.number('Invalid').min(answer, 'Incorrect').max(answer, 'Incorrect').required('You must pass the test'),
  });

  return  <div>
            <Formik
              initialValues={{
                email: '',
                test: '',
              }}
              validationSchema={ValidationSchema}
              onSubmit={async (values) => {
                const apiUrl = Constants.CONTEST_API + "&Message=" + values.email;
                axios.post(
                  apiUrl, {}, {
                    headers: {"x-api-key": Constants.CONTEST_API_KEY}
                  }
                ).catch((error) => alert(error))
                .then(props.close);
              }
            }
            >
            <Form>
              <Email/>
              <Break height="3"/>
              <CheckHuman question={question}/>
              <FormFooter close={props.close}/>
            </Form>
            </Formik>
          </div>
};