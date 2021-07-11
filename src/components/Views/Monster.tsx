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
`;

const Subtitle = styled.p`
  font-size: 2.5rem;
  font-family: neverwinter;
`;

const Stat = styled.p`
  border: 2px solid black;
	text-align: center;
`;

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
    <ViewWrapper id="pdf">
      <Title text={name} />
      <Subtitle>{motivation}</Subtitle>
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
      </Container>
    </ViewWrapper>
  );
}
