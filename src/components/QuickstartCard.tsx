import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import Break from './Break';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CardProps {
  header: string;
  border: string;
  background: string;
  color: string;
  text: string[];
  button?: ReactNode;
}

const MyCard = styled(Card)`
  margin: 0px;
  border: ${(props: CardProps) => props.border};
`;

const MyHeader = styled(Card.Header)`
  text-align: center;
  font-size: 32px;
  color: ${(props: CardProps) => props.color};
  background: ${(props: CardProps) => props.background};
`;

const MyBody = styled(Card.Body)`
  min-height: 65vh;
`;

const MyList = styled.ul`
  margin-left: 6px;
  padding: 0;
  min-height: 50vh;
`;

const MyText = styled.li`
  font-size: 24px;
`;

export default function QuickstartCard({
  border,
  background,
  color,
  header,
  text,
  button,
}: CardProps): ReactElement {
  const TextList = text.map((txt, idx) => (
    <div key={txt + idx.toString()}>
      <MyText>{txt}</MyText>
      <Break height="2vh" />
    </div>
  ));

  return (
    <MyCard border={border}>
      <MyHeader color={color} background={background}>
        {header}
      </MyHeader>
      <MyBody>
        <MyList>{TextList}</MyList>
        {button}
      </MyBody>
      <Break height="3vh" />
    </MyCard>
  );
}
