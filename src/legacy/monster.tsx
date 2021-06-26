import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import * as Constants from '../constants';
import Layout from '../layouts/layout';
import MonsterForm from '../components/Forms/MonsterForm/MonsterForm';
import Title from '../components/Title';
// import {FormStepper from '../components/Forms/FormUtils';
import Tutorial from '../components/Forms/Tutorial';
import { Container, Col, Row, Jumbotron } from 'react-bootstrap';

const MonsterBackground = styled.div`
  background-image: url(${`${Constants.BUCKET_URL}Monster.jpg`});
  background-color: ${Constants.RED};
  background-position: center;
  background-size: cover;
  height: 100vh;
  justify-content: center;
  position: relative;
`;

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
      <MonsterBackground>
        <Monstertron>
          <Title text="Monster Maker" size="10vmin"></Title>
          <MonsterForm />
        </Monstertron>
      </MonsterBackground>
    </Layout>
  );
}
