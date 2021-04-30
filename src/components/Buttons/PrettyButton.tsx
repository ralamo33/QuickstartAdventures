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
  backgroundColor: string;
  borderColor: string;
  opacity?: string;
  hoverColor?: string;
  onClick?: () => void;
}

const MyButton = styled(Button)`
  && {
    margin: auto;
    display: block;
    font-size: ${(props: ClickProps) => props.fontSize};
    color: ${(props: ClickProps) => props.color};
    background-color: ${(props: ClickProps) => props.backgroundColor};
    border-color: ${(props: ClickProps) => props.borderColor};
    opacity: ${(props: ClickProps) => props.opacity};
  }

  &:hover {
    background-color: ${(props: ClickProps) => props.hoverColor};
  }
`;

export default function ClickToOpen({
  variant,
  text,
  fontSize,
  color,
  backgroundColor,
  borderColor,
  hoverColor,
  opacity,
  onClick,
}: ClickProps): ReactElement {
  return (
    <MyButton
      variant={variant}
      fontSize={fontSize}
      color={color}
      backgroundcolor={backgroundColor}
      bordercolor={borderColor}
      hovercolor={hoverColor}
      opacity={opacity}
      onClick={onClick}
    >
      {text}
    </MyButton>
  );
}
