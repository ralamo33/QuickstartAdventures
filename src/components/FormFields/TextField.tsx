import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';
import { Row, Col } from 'react-bootstrap';

interface MonsterProps {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  error: string;
}

export default function TextField({
  id,
  name,
  placeholder,
  label,
  error,
}: MonsterProps): ReactElement {
  const MyLabel = styled.p`
    font-size: 20px;
    display: block;
  `;

  const FullField = styled(Field)`
    margin-bottom: 25px;
    width: 100%;
  `;

  return (
    <div>
      <MyLabel>{label}</MyLabel>
      <Row>
        <Col>
          <FullField id={id} name={name} placeholder={placeholder} />
          <ErrorMessage name={`The ${id} field has an error.`} />
        </Col>
      </Row>
    </div>
  );
}
