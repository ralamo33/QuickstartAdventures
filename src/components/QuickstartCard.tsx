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
  social: boolean;
  button?: ReactNode;
}

const MyCard = styled(Card)`
  margin: 10px 0px;
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
`;

const MyText = styled.li`
  font-size: 24px;
`;

const InstaText = styled(Button)`
  background: linear-gradient(
    45deg,
    #405de6,
    #5851db,
    #833ab4,
    #c13584,
    #e1306c,
    #fd1d1d
  );
`;

const onClick = () => {
  window.location.href = 'http://www.instagram.com/roleplayrev';
};

const InstaLink = () => {
  return (
    <MyText>
      <InstaText onClick={onClick}>Instagram</InstaText>
    </MyText>
  );
};

function InstaFun(social: boolean) {
  if (social) {
    return <InstaLink />;
  }
  return <div />;
}

export default function QuickstartCard({
  border,
  background,
  color,
  header,
  text,
  button,
  social,
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
        <MyList>
          {TextList}
          {InstaFun(social)}
        </MyList>
      </MyBody>
      {button}
      <Break height="3vh" />
    </MyCard>
  );
}
