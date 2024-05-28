import React from "react";
import ModalBlock from "./modal-block";

import "./modal.scss";

function Modal({ currentProductOpenedInModal, closeModal }) {
  if (currentProductOpenedInModal === null) return <></>;

  return (
    <>
      <div className="modal_wrapper">
        <div
          className="modal_background"
          onClick={() => closeModal()}
        />
        <ModalBlock
          currentProductOpenedInModal={currentProductOpenedInModal}
          closeModal={closeModal}
        />
      </div>
    </>
  );
}

export default Modal;