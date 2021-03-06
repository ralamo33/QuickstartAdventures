import React, { ReactElement } from 'react';
import styled from 'styled-components';
import MonsterForm from '../components/Forms/Monster/MonsterForm';
import Title from '../components/Title';
import { Container } from 'react-bootstrap';
// import {FormStepper from '../components/Forms/FormUtils';
import { BackgroundOrange } from '../backgrounds';

// Ensure that the background encapsulate the full page, even if the form is super small.
const FullPage = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
`;

export default function Monster(): ReactElement {
  return (
    <BackgroundOrange>
      <FullPage>
        <Container>
          <Title text="Monster Maker" size="10vmin"></Title>
          <MonsterForm />
        </Container>
      </FullPage>
    </BackgroundOrange>
  );
}
