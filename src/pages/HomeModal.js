import React from 'react';
import { Modal } from 'rsuite';

const HomeModal = ({ name, id, thumbnail, price }) => {
  return (
    <Modal>
      <Modal.Header>
        <h5>{name}</h5>
      </Modal.Header>
      <Modal.Body>
        <img key={id} src={thumbnail} alt="" />
      </Modal.Body>
      <Modal.Footer>
        <h6>{price}</h6>
      </Modal.Footer>
    </Modal>
  );
};

export default HomeModal;
