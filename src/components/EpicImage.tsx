import React, { ReactElement } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

interface EpicProps {
  src: string;
}

const StyledImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export default function EpicImage({ src }: EpicProps): ReactElement {
  return <StyledImage src={src} alt="Failed to load" />;
}
