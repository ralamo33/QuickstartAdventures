import React, {} from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import Break from './Break';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function QuickstartCard(props): ReactElement {
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

  const TextList = props.text.map((text) => (
    <div>
      <MyText>{text}</MyText>
      <Break height="2" />
    </div>
  ));

  return (
    <MyCard className={props.border}>
      <MyHeader className={props.color}>{props.header}</MyHeader>
      <MyBody>
        <Card.Text>
          <MyList>
            {TextList}
          </MyList>
        </Card.Text>
      </MyBody>
      {props.button}
      <Break height="3" />
    </MyCard>
  );
}
