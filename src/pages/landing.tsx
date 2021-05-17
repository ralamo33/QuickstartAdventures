import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import * as Constants from '../constants';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../layouts/layout';
import Break from '../components/Break';
import SubscribeButton from '../components/Buttons/SubscribeButton';
import LandingForm from '../components/Forms/LandingForm';

const Header = styled.div`
  color: ${Constants.RED};
  font-size: 2.5vw;
  max-width: 80vw;
  margin: auto;
  font-family: newsreader;
  font-weight: 500;
`;

const Bold = styled.span`
  font-weight: 700;
  text-align: center;
  font-family: belmont;
  font-size: 2.6vw;
`;

const Subheader = styled.div`
  color: #000080;
  font-size: 1.3rem;
  font-family: newsreader;
`;

const StyledContainer = styled(Container)`
  height: 85vh;
`;

const StyledImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
`;

const StyledList = styled.ul`
  font-size: 1.4rem;
  font-family: newsreader;
  font-weight: 475;
`;

const BasicBold = styled.span`
  font-weight: 700;
`;

const MyHeader = () => (
  <Header>
    <Bold>Never</Bold> struggle to find players again.
  </Header>
);

const MySubheader = () => (
  <Subheader>
    Convert your friends into RPG <BasicBold>FANATICS</BasicBold> with a game
    they can learn in 10 minutes.
  </Subheader>
);

export default function Landing() {
  // const header = 'Never struggle to find players again. Convert your friends into RPG fanatics with a game they can learn in 10 minutes.';
  const bold = 'FANATICS';
  const subheader =
    '20-page starter set includes basic rules, character materials PLUS a 2 hour mini adventure that will leave your friends hungry for more. A PDF copy will be instantly sent to your inbox.';

  return (
    <Layout>
      <Break height="10vh"></Break>
      <StyledContainer>
        <Row>
          <Col>
            <Break height="1vh"></Break>
            <StyledImage
              src={`${Constants.BUCKET_URL}Starter Set.jpg`}
            ></StyledImage>
          </Col>
          <Col>
            <MyHeader></MyHeader>
            <StyledList>
              <li>
                A 2 hour RPG experience your friends will{' '}
                <BasicBold>LOVE</BasicBold>.
              </li>
              <li>
                Eliminate session 0s and get started with the action instantly.
              </li>
              <li>
                Build meaningful experiences easily with friends new to TTRPGs.
              </li>
            </StyledList>
            <LandingForm></LandingForm>
            <Break height="5vh"></Break>
            <Subheader>{subheader}</Subheader>
          </Col>
        </Row>
      </StyledContainer>
      <Break height="10vh"></Break>
    </Layout>
  );
}
