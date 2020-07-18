import React, { useReducer, useEffect } from "react";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import * as contactTypes from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      { firstname: "Hans", lastname: "Musterman", email: "hans@muster.de" },
      { firstname: "Hanna", lastname: "Musterman", email: "hanna@muster.de" },
      { firstname: "Hagrid", lastname: "Musterman", email: "hagrid@muster.de" },
    ],
    contact: {},
  };

  const [state, dispatch] = useReducer(ContactReducer, [], () => {
    const localData = localStorage.getItem("contactListStorage");
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("contactListStorage", JSON.stringify(state));
  }, [state, state.contacts]);

  const addContact = () => {
    dispatch({
      type: contactTypes.ADD_CONTACT,
      payload: [],
    });
  };

  const getContacts = () => {
    dispatch({
      type: contactTypes.GET_CONTACTS,
      payload: [],
    });
  };

  const deleteContact = () => {
    dispatch({
      type: contactTypes.DELETE_CONTACT,
      payload: [],
    });
  };

  const updateContact = () => {
    dispatch({
      type: contactTypes.UPDATE_CONTACT,
      payload: [],
    });
  };

  return (
    <ContactContext.Provider
      value={{
        state,
        deleteContact,
        getContacts,
        updateContact,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
