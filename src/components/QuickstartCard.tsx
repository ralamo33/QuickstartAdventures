import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import Break from './Break';
import { ListText } from '../components/ListText';
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
  margin-left: 1vmin;
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
  return (
    <MyCard border={border}>
      <MyHeader color={color} background={background}>
        {header}
      </MyHeader>
      <MyBody>
        <ListText
          text={text}
          size="24px"
          color="black"
          fontFamily="newrocker"
        />
        {button}
      </MyBody>
      <Break height="3vh" />
    </MyCard>
  );
}
