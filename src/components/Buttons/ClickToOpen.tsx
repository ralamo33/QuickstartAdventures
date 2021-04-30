/* eslint-disable react/prop-types */
import React, { ReactNode, ReactElement } from 'react';
import PrettyButton from './PrettyButton';
import styled from 'styled-components';
import MyModal from '../MyModal';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ClickProps {
  variant: string;
  show: boolean;
  setShow: (show: boolean) => void;
  title: string;
  text: string;
  form: ReactNode;
  fontSize: string;
  color: string;
  backgroundColor: string;
  borderColor: string;
  opacity?: string;
  hoverColor?: string;
}

export default function ClickToOpen({
  variant,
  text,
  form,
  title,
  show,
  setShow,
  fontSize,
  color,
  backgroundColor,
  borderColor,
  hoverColor,
  opacity,
}: ClickProps): ReactElement {
  const handleShow = () => setShow(true);

  return (
    <div>
      <PrettyButton
        variant={variant}
        onClick={handleShow}
        fontSize={fontSize}
        text={text}
        color={color}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        hoverColor={hoverColor}
        opacity={opacity}
      ></PrettyButton>
      <MyModal form={form} show={show} setShow={setShow} title={title} />
    </div>
  );
}
