import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { Col } from 'react-bootstrap';

const StyledText = styled.p`
  color: white;
  text-align: center;
  font-size: 1.6rem;
`;

const PaddedCol = styled(Col)`
  padding-left: 5vw;
  padding-right: 5vw;
`;


export function Testimonial(): ReactElement {
  return (
    <PaddedCol sm="12" md="6" lg="4">
      <StaticImage alt="Brandon" src="../images/Brandon3.jpg" />
      <StyledText>{Constants.PLAYTESTER_TESTIMONIALS.Brandon}</StyledText>
    </PaddedCol>
  );
}
