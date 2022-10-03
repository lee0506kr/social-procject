import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  height: 40vh;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
let portalElement = document.getElementById('modal');

const Modal = ({ children, showModalHandler }) => {
  return (
    <>
      {createPortal(<Backdrop onClick={showModalHandler} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
