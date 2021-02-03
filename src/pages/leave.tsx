import React, { ReactElement, MouseEvent } from 'react';
import { useQueryParam, StringParam } from 'use-query-params';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { navigate } from 'gatsby';
import * as Constants from '../constants';
import Layout from '../layouts/layout';
import EpicImage from '../components/EpicImage';

export default function Leave(): ReactElement {
  const email = useQueryParam('email', StringParam);

  const Relative = styled.div`
    position: relative;
  `;

  const Title = styled.p`
    text-align: center;
    font-size: 5vw;
    color: #ccffff;
  `;

  const MyButton = styled(Button)`
    position: absolute;
    top: 50%;
    font-size: 3vw;
  `;

  const LeaveButton = styled(MyButton)`
    left: 65%;
  `;

  const StayButton = styled(MyButton)`
    left: 25%;
  `;

  const headers = {
    headers: {
      Email: email,
      TopicArn: 'arn:aws:sns:us-east-1:451835830300:ComplaintEmail',
    },
  };

  const leave = (event: MouseEvent<HTMLInputElement>): void => {
    event.preventDefault();
    axios
      .post(Constants.REMOVE_EMAIL_API, {}, headers)
      .catch((error) => alert(error));
  };

  return (
    <Layout>
      <Title>Do you really want to leave?</Title>
      <Relative>
        <EpicImage src="https://pop-verse.com/wp-content/uploads/2015/05/Abzan-Houses-MtG-Art-620x330.jpg" />
        <StayButton variant="primary" size="lg" onClick={() => navigate('/')}>
          Stay
        </StayButton>
        <LeaveButton variant="danger" size="lg" onClick={leave}>
          Leave
        </LeaveButton>
      </Relative>
    </Layout>
  );
}
