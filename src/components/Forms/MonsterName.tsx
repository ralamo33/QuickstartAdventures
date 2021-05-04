import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col } from 'react-bootstrap';
import Break from '../Break';
import { TextFormField } from '../FormFields/FormFields/TextFormField';
import { TextAreaFormField } from '../FormFields/FormFields/TextAreaFormField';
import * as Constants from '../../constants';

interface FormValues {
  name: string;
  description: string;
}

const CenterText = styled.div`
  text-align: center;
`;

export default function MonsterName(): ReactElement {
  const validCharacters = new RegExp('^[a-zA-Z0-9äöüÄÖÜ]*$');
  const validString = Yup.string().matches(
    validCharacters,
    'Contains invalid characters'
  );

  const ValidationSchema = Yup.object().shape({
    name: validString.required('Monsters need names too'),
    summary: validString,
    description: validString,
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          summary: '',
          description: '',
        }}
        validationSchema={ValidationSchema}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onSubmit={(values: FormValues) => {}}
      >
        <Form>
          <CenterText>
            <Container>
              <Row>
                <Col>
                  <Field
                    name="name"
                    component={TextFormField}
                    label="Monster Name"
                  ></Field>
                  <ErrorMessage name="Invalid monster name" />
                </Col>
                <Col>
                  <Field
                    name="summary"
                    component={TextFormField}
                    label="Summary"
                  ></Field>
                  <ErrorMessage name="Invalid monster summary" />
                </Col>
              </Row>
              <Break height="5vh"></Break>
              <Row>
                <Col>
                  <Field
                    label="Description"
                    name="description"
                    component={TextAreaFormField}
                    as="textarea"
                    placeholder="Great black claws"
                  ></Field>
                </Col>
              </Row>
            </Container>
          </CenterText>
        </Form>
      </Formik>
    </div>
  );
}
