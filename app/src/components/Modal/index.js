import React from 'react';
import { Overlay, Container, Icon, Title, Desc } from './styles';
export { ModalButton } from './styles';
const Modal = ({ icon, title, desc, children }) => {
  return (
    <Overlay>
      <Container>
        <Icon source={icon} />
        <Title>{title}</Title>
        {desc && <Desc>{desc}</Desc>}
        {children}
      </Container>
    </Overlay>
  );
};

export default Modal;
