import React, { useState } from "react";
import "./Portals.scss";
import Modal from "./Modal";

const Portals = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <div className="Portals" data-testid="Portals">
      Portals Component
      <button onClick={toggleModal}>Toggle Modal</button>
      {isModalVisible ? <Modal>Some text</Modal> : null}
    </div>
  );
};

export default Portals;
