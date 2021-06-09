import React, { ReactElement } from 'react';
import styled from 'styled-components';
import * as Constants from '../constants';
import Layout from '../layouts/layout';
import MonsterForm from '../components/Forms/MonsterForm/MonsterForm';
import Title from '../components/Title';
// import {FormStepper from '../components/Forms/FormUtils';
import { Jumbotron } from 'react-bootstrap';
import BackgroundImageContainer from '../components/BackgroundImageContainer';

const Monstertron = styled(Jumbotron)`
  position: center;
  left: 10%;
  display: block
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 1.2rem;
  width: 80vw;
  // background-color: ${Constants.ORANGE};
  background-color: #cccccc;
  color: black;
  opacity: 0.95;
`;

export default function Monster(): ReactElement {
  return (
    <Layout>
      <BackgroundImageContainer>
        <Monstertron>
          <Title text="Monster Maker" size="10vmin"></Title>
          <MonsterForm />
        </Monstertron>
      </BackgroundImageContainer>
    </Layout>
  );
}
