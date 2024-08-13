import React, { Fragment } from 'react';
import Card from './Card';
import { createPortal } from 'react-dom';
import './modal.css'
import { useModalContext } from '../context/modal-context';

const Modal = ({ className, children }) => {
  const { showModal, closeModalHandler } = useModalContext();
  return (
    <Fragment>
      {
        showModal && createPortal(
          <>
            <section id="backdrop" onClick={closeModalHandler}></section>
            <Card className={className}>{children}</Card>
          </>,
          document.querySelector('#overlays')
        )
      }
    </Fragment>
  );
}

export default Modal;
