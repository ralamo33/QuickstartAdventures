/* eslint-disable react/prop-types */
import React, { ReactNode, ReactElement } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import MyModal from '../MyModal';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ClickProps {
  size: string;
  variant: string;
  show: boolean;
  setShow: (show: boolean) => void;
  title: string;
  text: string;
  form: ReactNode;
}

const MyButton = styled(Button)`
  margin: auto;
  display: block;
`;

export default function ClickToOpen({
  size,
  variant,
  text,
  form,
  title,
  show,
  setShow,
}: ClickProps): ReactElement {
  const handleShow = () => setShow(true);

  return (
    <div>
      <MyButton className={size} variant={variant} onClick={handleShow}>
        {text}
      </MyButton>
      <MyModal form={form} show={show} setShow={setShow} title={title} />
    </div>
  );
}
