import React from "react";
import ModalBlock from "./modal-block";

import "./modal.scss";

function Modal({ showHideModal, itemData }) {

  return (
    <>
      <div className="modal_wrapper">
        <div className="modal_background"
          onClick={showHideModal}></div>

        <ModalBlock showHideModal={showHideModal} itemData={itemData} />
      </div>
    </>
  );
}

export default Modal;