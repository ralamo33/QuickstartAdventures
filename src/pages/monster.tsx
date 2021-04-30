import React, { ReactElement, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as Constants from '../constants';
import Layout from '../layouts/layout';
import Title from '../components/Title';
import EpicImage from '../components/EpicImage';
import MonsterForm from '../components/Forms/CreatorForms/MonsterForm';

const Form = styled.form`
  width: 100%;
  position: absolute;
  text-align: center;
`;

const Relative = styled.div`
  position: relative;
`;

export default function Monster(): ReactElement {
  return (
    <Layout>
      <EpicImage src={`${Constants.BUCKET_URL}Monster.jpg`} />
      <Title text="Making Monsters" color="black"></Title>
      <MonsterForm></MonsterForm>
    </Layout>
  );
}
