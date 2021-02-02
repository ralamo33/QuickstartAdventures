/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import MyModal from '../MyModal';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ClickToOpen({
  size, variant, text, form, title, show, setShow,
}) {
  const handleShow = () => setShow(true);

  const MyButton = styled(Button)`
        margin: auto;
        display: block;
    `;

  return (
    <div>
      <MyButton className={size} variant={variant} onClick={handleShow}>{text}</MyButton>
      <MyModal form={form} show={show} setShow={setShow} title={title} />
    </div>
  );
}
