import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Break from '../components/Break';
import Layout from '../layouts/layout';
import LandingForm from '../components/Forms/LandingForm';
import BackgroundImageContainer from '../components/BackgroundImageContainer';

export default function Landing(): ReactElement {
  return (
    <Layout>
      <BackgroundImageContainer>
        <Break height="20vh"></Break>
        <LandingForm></LandingForm>
      </BackgroundImageContainer>
    </Layout>
  );
}
