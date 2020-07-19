import React, { useContext } from "react";
import StyledContact from "./StyledContact";
import PropTypes from "prop-types";
import ContactContext from "../../context/contacts/contactContext";

const Contact = ({ contact: { firstname, lastname, email, id, avatar } }) => {
  const { deleteContact } = useContext(ContactContext);
  return (
    <StyledContact>
      <img
        className="avatar-img"
        src={avatar}
        alt={`Avatar from ${firstname} ${lastname}`}
      />
      <div className="info">
        <p className="fullname">{`${firstname} ${lastname}`}</p>
        <p className="email">{`${email}`}</p>
      </div>
      <div className="actions">
        <img className="icon" src="/edit-icon.svg" alt="Edit Icon" />
        <img
          className="icon"
          src="/delete-icon.svg"
          alt="Delete Icon"
          onClick={() => deleteContact(id)}
        />
      </div>
    </StyledContact>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
