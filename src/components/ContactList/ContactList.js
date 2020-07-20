import React, { useContext } from "react";
import StyledContactList from "./StyledContactList";
import Contact from "../Contact/Contact";
import ContactContext from "../../context/contacts/contactContext";
import PropTypes from "prop-types";

const ContactList = ({ editContact }) => {
  const { state } = useContext(ContactContext);
  return (
    <div>
      {state.length > 0 &&
        state.map((el) => (
          <Contact key={el.id} contact={el} editContact={editContact} />
        ))}
    </div>
  );
};

ContactList.propTypes = {
  editContact: PropTypes.func.isRequired,
};

export default ContactList;
