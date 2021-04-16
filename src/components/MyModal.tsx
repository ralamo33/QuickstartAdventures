import React, { ReactElement, ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';

interface ModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  title: string;
  form: ReactNode;
}

export default function MyModal({
  show,
  setShow,
  title,
  form,
}: ModalProps): ReactElement {
  const handleClose = () => setShow(false);

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{form}</Modal.Body>
      </Modal>
    </div>
  );
}
