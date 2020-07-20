import React from "react";
import StyledBackdrop from "./StyledBackdrop";
import PropTypes from "prop-types";

function Backdrop({ toggleModal }) {
  return <StyledBackdrop onClick={toggleModal}></StyledBackdrop>;
}

Backdrop.proTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Backdrop;
