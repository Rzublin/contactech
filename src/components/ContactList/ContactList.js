import React, { useContext } from "react";
import StyledContactList from "./StyledContactList";
import Contact from "../Contact/Contact";
import ContactContext from "../../context/contacts/contactContext";

const ContactList = () => {
  const { state } = useContext(ContactContext);
  return (
    <div>
      {state.length > 0 &&
        state.map((el) => <Contact key={el.id} contact={el} />)}
    </div>
  );
};

export default ContactList;
