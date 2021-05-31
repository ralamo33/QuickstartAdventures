import React, { ReactElement } from 'react';
import styled from 'styled-components';
import * as Constants from '../constants';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../layouts/layout';
import Break from '../components/Break';
import LandingForm from '../components/Forms/LandingForm';

const Header = styled.div`
  color: ${Constants.RED};
  max-width: 90vw;
  margin: auto;
  font-size: 3.5vmax;
  font-family: newsreader;
  font-weight: 500;
`;

const Bold = styled.span`
  font-weight: 700;
  text-align: center;
  font-family: belmont;
  font-size: 4vmax;
`;

const Subheader = styled.div`
  color: black;
  font-size: 2.5vmax;
  font-family: newsreader;
`;

const StyledContainer = styled(Container)`
  background-image: linear-gradient(to right, #ddd, white);
  min-height: 100vh;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
`;

const StyledList = styled.ul`
  font-size: 2.5vmax;
  font-family: newsreader;
  font-weight: 475;
  margin-bottom: 0;
`;

const BasicBold = styled.span`
  font-weight: 700;
`;

const WrapForm = styled.div`
  width: 80%;
  margin: auto;
  display: block;
`;

const MyHeader = () => (
  <Header>
    <Bold>Never</Bold> struggle to find players again.
  </Header>
);

export default function Landing(): ReactElement {
  const subheader =
    '20-page starter set includes basic rules, character materials PLUS a 2 hour mini adventure that will leave your friends hungry for more. A PDF copy will be instantly sent to your inbox.';

  return (
    <Layout>
      <StyledContainer fluid>
        <Row>
          <Col xs="12" sm={{ span: 6, order: 'last' }}>
            <MyHeader></MyHeader>
            <StyledList>
              <li>
                A 2 hour RPG experience your friends will{' '}
                <BasicBold>LOVE</BasicBold>.
              </li>
              <li>Eliminate session 0 and get to the action instantly.</li>
              <li>Build meaningful experiences with new players.</li>
            </StyledList>
          </Col>
          <Col xs="12" sm={{ span: 6, order: 'first' }}>
            <Break height="3vh"></Break>
            <Flex>
              <StyledImage
                src={`${Constants.BUCKET_URL}StarterRules.jpg`}
              ></StyledImage>
            </Flex>
          </Col>
        </Row>
        <Row>
          <Col>
            <Break height="1vh"></Break>
            <WrapForm>
              <LandingForm></LandingForm>
            </WrapForm>
          </Col>
        </Row>
        <Break height="10vh"></Break>
        <Row>
          <Col>
            <WrapForm>
              <Subheader>{subheader}</Subheader>
            </WrapForm>
          </Col>
        </Row>
      </StyledContainer>
    </Layout>
  );
}
