import React, { useContext } from "react";
import StyledContactList from "./StyledContactList";
import Contact from "../Contact/Contact";
import ContactContext from "../../context/contacts/contactContext";

const ContactList = () => {
  const {
    state: { contacts },
  } = useContext(ContactContext);
  return (
    <div>
      {contacts.length > 0 &&
        contacts.map((el) => (
          <Contact key={el.firstname + el.lastname} contact={el} />
        ))}
    </div>
  );
};

export default ContactList;
