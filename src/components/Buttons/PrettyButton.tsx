/* eslint-disable react/prop-types */
import React, { ReactNode, ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ClickProps {
  variant: string;
  text: string;
  fontSize: string;
  color: string;
  backgroundcolor: string;
  bordercolor: string;
  opacity?: string;
  hovercolor?: string;
  onClick?: () => void;
}

const MyButton = styled(Button)`
  && {
    margin: auto;
    display: block;
    font-size: ${(props: ClickProps) => props.fontSize};
    color: ${(props: ClickProps) => props.color};
    background-color: ${(props: ClickProps) => props.backgroundcolor};
    border-color: ${(props: ClickProps) => props.bordercolor};
    opacity: ${(props: ClickProps) => props.opacity};
  }

  &:hover {
    background-color: ${(props: ClickProps) => props.hovercolor};
  }
`;

export default function PrettyButton({
  variant,
  text,
  fontSize,
  color,
  backgroundcolor,
  bordercolor,
  hovercolor,
  opacity,
  onClick,
}: ClickProps): ReactElement {
  return (
    <MyButton
      variant={variant}
      fontSize={fontSize}
      color={color}
      backgroundcolor={backgroundcolor}
      bordercolor={bordercolor}
      hovercolor={hovercolor}
      opacity={opacity}
      onClick={onClick}
    >
      {text}
    </MyButton>
  );
}
