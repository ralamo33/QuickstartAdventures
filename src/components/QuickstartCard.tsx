import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import Break from './Break';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CardProps {
  header: string;
  border: string;
  color: string;
  text: string[];
  button: ReactNode;
}

export default function QuickstartCard({
  border,
  color,
  header,
  text,
  button,
}: CardProps): ReactElement {
  const MyCard = styled(Card)`
    margin: 10px 0px;
  `;

  const MyHeader = styled(Card.Header)`
    text-align: center;
    font-size: 32px;
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

  const TextList = text.map((txt, idx) => (
    <div key={txt + idx.toString()}>
      <MyText>{txt}</MyText>
      <Break height={2} />
    </div>
  ));

  return (
    <MyCard className={border}>
      <MyHeader className={color}>{header}</MyHeader>
      <MyBody>
        <Card.Text>
          <MyList>{TextList}</MyList>
        </Card.Text>
      </MyBody>
      {button}
      <Break height={3} />
    </MyCard>
  );
}
