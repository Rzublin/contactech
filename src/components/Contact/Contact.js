import React from "react";
import StyledContact from "./StyledContact";
import PropTypes from "prop-types";

const Contact = ({ contact: { firstname, lastname, email } }) => {
  return (
    <div>
      <p>{`Contact: ${firstname} ${lastname}`}</p>
      <p>{`Email: ${email}`}</p>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
