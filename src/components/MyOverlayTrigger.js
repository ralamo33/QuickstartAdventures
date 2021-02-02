/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { OverlayTrigger } from 'react-bootstrap';

export default function MyOverlayTrigger({
  text, header, textClass, imageClass, colorClass,
}) {
  const MyRow = styled.div`
        height: 50vh;
        background-position: center;
        background-size: cover;
    `;
  const StyledHeader = styled.p`
        font-size: 8vh;
        text-align: center;
    `;
  const StyledText = styled.p`
        width: 60vw;
        font-size: 3vh;
        max-width: 600px;
        text-align: center;
    `;
  const MyText = <StyledText className={textClass}>{text}</StyledText>;
  return (
    <MyRow className={imageClass}>
      <OverlayTrigger placement="bottom" overlay={MyText}>
        <StyledHeader className={colorClass}>
          {header}
        </StyledHeader>
      </OverlayTrigger>
    </MyRow>
  );
}
