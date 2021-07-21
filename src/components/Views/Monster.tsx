import React, { ReactElement } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Title from '../../components/Title';

interface Props {
  name: string;
  motivation: string;
  str: number;
  dex: number;
  int: number;
  wis: number;
  cha: number;
  health: number;
  armor: number;
  speed: number;
  attack: string;
  actions: number;
  description: string;
  guide: string;
}

const ViewWrapper = styled.div`
  width: 6.268in;
  margin: auto;
  font-family: NewRocker-Regular;
`;

const Hide = styled.div`
  display: none;
`;

const Motivation = styled.p`
  font-size: 2.5rem;
  font-family: Neverwinter;
  text-align: center;
`;

const Stat = styled.p`
  font-size: 1.3rem;
  text-align: center;
	border: 2px solid black;
`;

const Text = styled.p``;

export function MonsterView({
  name,
  motivation,
  str,
  dex,
  int,
  wis,
  cha,
  health,
  armor,
  speed,
  attack,
  actions,
  description,
  guide,
}: Props): ReactElement {
  return (
    <Hide>
      <ViewWrapper id="pdf">
        <Title text={name} fontFamily="Belmont Regular" size={'2.5rem'} />
        <Motivation>{motivation}</Motivation>
        <Container>
          <Row>
            <Col>
              <Stat>STR: {str}</Stat>
            </Col>
            <Col>
              <Stat>DEX: {dex}</Stat>
            </Col>
            <Col>
              <Stat>INT: {int}</Stat>
            </Col>
            <Col>
              <Stat>WIS: {wis}</Stat>
            </Col>
            <Col>
              <Stat>CHA: {cha}</Stat>
            </Col>
          </Row>
          <Row>
            <Col>
              <Stat>Health: {health}</Stat>
            </Col>
            <Col>
              <Stat>Armor: {armor}</Stat>
            </Col>
            <Col>
              <Stat>Speed: {speed}</Stat>
            </Col>
          </Row>
          <Row>
            <Col>
              <Stat>Attack: {attack}</Stat>
            </Col>
            <Col>
              <Stat>1 action per {actions} players</Stat>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text>{description}</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Title size="2rem" color="black" text="GM Tips" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Text>{guide}</Text>
            </Col>
          </Row>
        </Container>
      </ViewWrapper>
    </Hide>
  );
}
