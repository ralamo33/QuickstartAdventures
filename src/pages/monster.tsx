import React, { ReactElement, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as Constants from '../constants';
import Layout from '../layouts/layout';
import EpicImage from '../components/EpicImage';
import MonsterForm from '../components/Forms/MonsterForm';

const Form = styled.form`
  width: 100%;
  position: absolute;
  text-align: center;
`;

const Relative = styled.div`
  position: relative;
`;

const Title = styled.p`
  text-align: center;
  font-size: 5vw;
  color: #ccffff;
`;

export default function Monster(): ReactElement {
  return (
    <Layout>
      <Title>Create a Monster</Title>
      <Relative>
        <MonsterForm></MonsterForm>
        <EpicImage src="https://pop-verse.com/wp-content/uploads/2015/05/Abzan-Houses-MtG-Art-620x330.jpg" />
      </Relative>
    </Layout>
  );
}
