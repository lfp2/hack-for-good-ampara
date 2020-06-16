import React from 'react';
import {
  Overlay,
  Container,
  Icon,
  Title,
  Desc,
  ModalBigButton,
  ModalButtons,
  ModalSmallButton,
} from './styles';
export { ModalBigButton, ModalButtons, ModalSmallButton } from './styles';
const Modal = ({ icon, title, desc, children, isOn }) => {
  if (isOn === false) {
    return null;
  }
  return (
    <Overlay isOn={isOn}>
      <Container>
        <Icon source={icon} />
        <Title>{title}</Title>
        {desc && <Desc>{desc}</Desc>}
        {children}
      </Container>
    </Overlay>
  );
};

Modal.BigButton = ModalBigButton;

Modal.SmallButton = ModalSmallButton;

Modal.Buttons = ModalButtons;

export default Modal;
