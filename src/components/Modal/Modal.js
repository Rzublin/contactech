import React, { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import StyledModal from "./StyledModal";
import PropTypes from "prop-types";

function Modal({ children, toggleModal }) {
  return (
    <Fragment>
      <Backdrop toggleModal={toggleModal} />
      <StyledModal>{children}</StyledModal>
    </Fragment>
  );
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
