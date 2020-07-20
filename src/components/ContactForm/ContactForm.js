import React, { useState, useContext } from "react";
import StyledContactForm from "./StyledContactForm";
import ContactContext from "../../context/contacts/contactContext";
import PropTypes from "prop-types";

const ContactForm = ({ actionType, contact, toggleModal }) => {
  const [firstname, setFirstname] = useState(contact ? contact.firstname : "");
  const [lastname, setLastname] = useState(contact ? contact.lastname : "");
  const [email, setEmail] = useState(contact ? contact.email : "");
  const { addContact, updateContact } = useContext(ContactContext);

  return (
    <StyledContactForm>
      <h3>{actionType === "ADD" ? "Add new Contact" : "Update Contact"}</h3>
      <form>
        <div className="form-control">
          <label>Firstname </label>
          <input
            type="text"
            value={firstname}
            name="firstname"
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="Enter firstname..."
          />
        </div>
        <div className="form-control">
          <label>Lastname</label>
          <input
            type="text"
            value={lastname}
            name="lastname"
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Enter lastname..."
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email..."
          />
        </div>
        <div className="btn">
          <button
            onClick={(e) => {
              e.preventDefault();
              if (firstname && lastname && email) {
                if (actionType === "ADD") {
                  addContact(firstname, lastname, email);
                  setFirstname("");
                  setLastname("");
                  setEmail("");
                } else if (actionType === "UPDATE") {
                  updateContact(firstname, lastname, email, contact.id);
                  setFirstname("");
                  setLastname("");
                  setEmail("");
                  toggleModal();
                }
              }
            }}
          >
            {actionType === "ADD" ? "Add" : "Update"}
          </button>
        </div>
      </form>
    </StyledContactForm>
  );
};

ContactForm.propTypes = {
  actionType: PropTypes.string.isRequired,
  contact: PropTypes.object,
  closeModal: PropTypes.func,
};

export default ContactForm;
